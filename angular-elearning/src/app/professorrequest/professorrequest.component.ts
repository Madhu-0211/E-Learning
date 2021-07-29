import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
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
  selector: 'app-professorrequest',
  templateUrl: './professorrequest.component.html',
  styleUrls: ['./professorrequest.component.css']
})
export class ProfessorrequestComponent implements OnInit {
  public d:ProfessorSignup[]=[];
  details:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
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
