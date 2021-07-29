import { Component,OnInit } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[]=[];
  isLoggedIn = false;
  showAdmin = false;
  showProfessor=false;
  showStudent=false;
  username:string="";
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     
      this.roles = user.role;
     
      this.showAdmin = this.roles.includes("ROLE_ADMIN");
      this.showProfessor = this.roles.includes("ROLE_PROFESSOR");
      this.showStudent = this.roles.includes("ROLE_STUDENT");
      this.username = user.username;
      
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
