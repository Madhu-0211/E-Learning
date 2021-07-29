import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-professor-signup',
  templateUrl: './professor-signup.component.html',
  styleUrls: ['./professor-signup.component.css']
})
export class ProfessorSignupComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.professorSignup(this.form).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      (err:any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
