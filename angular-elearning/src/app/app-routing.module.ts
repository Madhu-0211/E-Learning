import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { ProfessorrequestComponent } from './professorrequest/professorrequest.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorComponent } from './professor/professor.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditstuComponent } from './editstu/editstu.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { LinksComponent } from './links/links.component';
import { AddlinksComponent } from './addlinks/addlinks.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
    
    { path: 'register', component: RegisterComponent },
    { path: 'professor-signup', component: ProfessorSignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editprofile/:id', component: EditprofileComponent },
    { path: 'editstu/:id', component: EditstuComponent },
    { path: 'editpro/:id', component: EditproComponent },
    { path: 'professor', component: ProfessorComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'addcourse', component: AddcourseComponent },
    { path: 'link/:id', component: LinksComponent },
    { path: 'addlink/:id', component: AddlinksComponent },
    { path: 'professorrequest', component: ProfessorrequestComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
