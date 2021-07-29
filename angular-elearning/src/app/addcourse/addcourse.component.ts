import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  form: any = {};
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    this.userService.addCourse(this.form).subscribe(
      (data: any) => {
        console.log(data);
        
        this.router.navigate(['/course']).then(result=>window.location.reload());
        
      },
      
    );
  }

}
