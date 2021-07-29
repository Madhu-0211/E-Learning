import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
interface ProfessorSignup
{
  id:Number;
  name:String;
  username:String;
  email:String;
  phonenumber:String;
  specialization:String;
  experience:number;
  status:number;
}
interface User{
  id:number;
  username:String;
  email:String;
  phonenumber:String;
  
}
interface Course{
  id:number;
  course:String;
  
  
}
interface Links{
  id:number;
  course:String;
  link:String;
  
  
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  professorSignup(user:any): Observable<any> {
    return this.http.post(API_URL + 'professorSignup', {
      username: user.username,
      email: user.email,
      phonenumber:user.phonenumber,
      specialization:user.specialization,
      experience:user.experience,
      password: user.password,
     
    }, httpOptions);}
    getprofessorRequest(): Observable<any> {
      return this.http.get<ProfessorSignup[]>(API_URL + 'getproRequest');
    }
    getId(id:Number): Observable<any> {
  return this.http.get<ProfessorSignup[]>(API_URL + 'getId/'+id);
}
getStudents(): Observable<any> {
  return this.http.get<User[]>(API_URL + 'getStudents');
}
getByProId(id:Number): Observable<any> {
  return this.http.get<ProfessorSignup[]>(API_URL + 'getByProId/'+id);
}
getByStuId(id:Number): Observable<any> {
  return this.http.get<User[]>(API_URL + 'getByStuId/'+id);
}
    acceptProfessor(id:Number,user:any): Observable<Object> {  
      return this.http.post(API_URL+'professorRequest/'+id,{
        username:user.username,
        email:user.email,
        specialization: user.specialization,
        experience:user.experience,
        phonenumber: user.phonenumber,
        password:user.password,
        status:1
          }, httpOptions);  
    }
    rejectProfessor(id:Number): Observable<Object> {  
      return this.http.delete(API_URL+'rejectProfessor/'+id,{ responseType: 'text' }); 
    }
  
    deleteStudent(id: Number): Observable<any> {  
      return this.http.delete(API_URL+ 'deleteStudent/'+id, { responseType: 'text' });  
    }  
    updateStudent(id:number,user:any): Observable<Object> {  
      return this.http.post(API_URL+'updateStudents/'+id,{
        
      username:user.username,
      email:user.email,
      phonenumber:user.phonenumber,
      password:user.password,
      role:"ROLE_STUDENT"
          }, httpOptions);  
    }
     addCourse(user:any): Observable<any> {
      return this.http.post(API_URL + 'addCourse', {
        course: user.coursename,
        
       
      }, httpOptions);}
      getCourse(): Observable<any> {
        return this.http.get<Course[]>(API_URL + 'getCourse');}
      
        addLink(user:any,id1:number): Observable<any> {
          return this.http.post(API_URL + 'addLink/'+id1 ,{
            
            link:user.link
            
           
          }, httpOptions);}
          getLink(id:number): Observable<any> {
            return this.http.get<Links[]>(API_URL + 'getLink/'+id);}
          
        
}
