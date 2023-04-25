import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  //calling api
  register( firstname:any,
    lastname:any,
    address:any,
    email:any,
    phone:any,
    gender:any,
    course:any){
      
    const body={
      firstname,
    lastname,
    address,
    email,
    phone,
    gender,
    course
    
    }
    console.log("body is" +body);
    

    return this.http.post("http://localhost:3000/register",body)
  }

  //api for details
  show(){
    return this.http.get("http://localhost:3000/show")
  }
}
