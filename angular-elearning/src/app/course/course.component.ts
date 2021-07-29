import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../service/token-storage.service';
interface Course{
  id:number;
  course:String;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public d:Course[]=[];
  details:any;
  private roles: string[]=[];
  show=false;
  show1=false;
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.role;
    this.show = this.roles.includes("ROLE_PROFESSOR");
    this.show1 = this.roles.includes("ROLE_STUDENT");
    this.userService.getCourse().subscribe(

      (data:Course[])=> {
        
        this.d=data;
        console.log("e",this.d);
      });
  }
  

}
