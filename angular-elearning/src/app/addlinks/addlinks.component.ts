import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router"
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addlinks',
  templateUrl: './addlinks.component.html',
  styleUrls: ['./addlinks.component.css']
})
export class AddlinksComponent implements OnInit {
  id:number=-1;
  form: any = {};
  constructor(private userService:UserService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
  }
  onSubmit() {
    
    this.userService.addLink(this.form,this.id).subscribe(
      (data: any) => {
        console.log(data);
        
        this.router.navigate(['/course']).then(result=>window.location.reload());
        
      },
      
    );
  }

}

