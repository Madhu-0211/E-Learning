import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-editstu',
  templateUrl: './editstu.component.html',
  styleUrls: ['./editstu.component.css']
})
export class EditstuComponent implements OnInit {

  form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
  constructor(private userService: UserService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getByStuId(this.id).subscribe(
      (data:any) =>{
        this.details=data;
        
        username:this.details.username;
        email:this.details.email;
        phonenumber: this.details.phonenumber;
        password:this.details.password;
      }
    );
  }
  
    onSubmit() {
    
    this.userService.updateStudent(this.id,this.details).subscribe(
      (data: any) => {
        console.log(data);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/patient']).then(result=>window.location.reload());
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}



