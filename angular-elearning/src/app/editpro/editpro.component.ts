import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from "@angular/router"
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
  form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    id:number=-1;
    details:any;
  constructor(private userService: UserService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log("da",this.id);
    this.userService.getByProId(this.id).subscribe(
      (data:any) =>{
        this.details=data;
        username:this.details.username;
        email:this.details.email;
        specialization: this.details.specialization;
        experience:this.details.experience;
        phonenumber: this.details.phonenumber;
        password:this.details.password;
      }
    );
  }
  
    onSubmit() {
    
    this.userService.acceptProfessor(this.id,this.details).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/professor']).then(result=>window.location.reload());
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}

        


