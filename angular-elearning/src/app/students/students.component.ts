import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';
interface User{
  id:number;
  username:String;
  email:String;
  phonenumber:String;
}
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public d:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getStudents().subscribe(

      (data:User[])=> {
        
        this.d=data;
        console.log("pat",data);
      });
    }
    deleteStudent(id: Number){  
     this.userService.deleteStudent(id)  
       .subscribe(  
         data => {  
           console.log(data);  
           location.reload();
       });
     }




}
