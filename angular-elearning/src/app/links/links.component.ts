import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
interface Links{
  id:number;
  course:String;
  link:String;
  }
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  id:number=-1;
  public d:Links[]=[];
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.userService.getLink(this.id).subscribe(

      (data:Links[])=> {
        
        this.d=data;
        
      });
  }

}
