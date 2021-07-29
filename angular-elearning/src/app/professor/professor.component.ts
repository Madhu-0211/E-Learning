import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../service/token-storage.service';
interface ProfessorSignup
{
  id:Number;
  name:String;
  username:String;
  email:String;
  phonenumber:String;
  specialization:String;
  experience:number;
  status:number;
}

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  public d:ProfessorSignup[]=[];
  details:any;
  showAdmin = false;
  private roles: string[]=[];
  private m:String='';
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.role;
    this.showAdmin = this.roles.includes("ROLE_ADMIN");
    this.userService.getprofessorRequest().subscribe(

      (data:ProfessorSignup[])=> {
        
        this.d=data;
      });
  }
  acceptRequest(id:Number)
  {
    this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
        });
    this.userService.acceptProfessor(id,this.details).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   }
  rejectRequest(id:Number)
  {
    this.userService.getId(id).subscribe(
        (data:any)=> {
          this.details=data;
          console.log("data",this.details);
          });
    this.userService.rejectProfessor(id).subscribe(
      (data:any)=> {
        
        console.log(data);
        location.reload();
      });
   
  }



}
