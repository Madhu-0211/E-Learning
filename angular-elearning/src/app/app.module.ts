import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { authInterceptorProviders } from './_helper/auth.interceptor';
import { ProfessorrequestComponent } from './professorrequest/professorrequest.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorComponent } from './professor/professor.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditstuComponent } from './editstu/editstu.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { LinksComponent } from './links/links.component';
import { AddlinksComponent } from './addlinks/addlinks.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfessorSignupComponent,
    HomeComponent,
    ProfileComponent,
    EditprofileComponent,
    ProfessorrequestComponent,
    StudentsComponent,
    ProfessorComponent,
    EditproComponent,
    EditstuComponent,
    CourseComponent,
    AddcourseComponent,
    LinksComponent,
    AddlinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
