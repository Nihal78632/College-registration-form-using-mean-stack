import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-front-end';

  showdata:any

  registerdetailstoapi:any
  //form group
  registerForm=this.registerFb.group({
    //form array
    firstname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    lastname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    address:['',[Validators.required,Validators.pattern('[a-z  A-Z]*')]],
    email:['',Validators.required],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    dob:['',Validators.required],
    gender:['',],
    course:['',Validators.required]

    
    
    
    
      })

      ngOnInit(): void {
        this.api.show().subscribe((result:any)=>{
    
          this.showdata=result.data
         
          
          
          
      
        })
        
      }

  constructor(private registerFb:FormBuilder,private api:ApiService,private route:Router){}


  register(){
  this.registerdetailstoapi=  this.registerForm.value

  
  
  
    
    if(this.registerForm.valid){
      
      let firstname=this.registerForm.value.firstname
      let lastname=this.registerForm.value.lastname
      let address=this.registerForm.value.address
      let email=this.registerForm.value.email
      let phone=this.registerForm.value.phone
      let gender=this.registerForm.value.gender
      let course=this.registerForm.value.course
      

      this.api.register(firstname,
        lastname,
        address,
        email,
        phone,
        gender,
        course)
    .subscribe((result)=>{
      alert("Registration Successful...")
      window.location.reload()
      
      
    })

   
      



    }
    else{
      alert('Invalid details')
    }

  }
}
