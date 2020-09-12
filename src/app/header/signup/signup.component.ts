import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // formStatus;
  subscribeRespose;
  myReactiveForm:FormGroup;
  userModel:User=new User()
  constructor(private userService:UserService, private router:Router, private formBuilder:FormBuilder) { }


  registerUser(){
    console.log(this.userModel);
    this.userService.register(this.userModel)
    .subscribe(response =>{
      console.log(response);
      this.subscribeRespose=response
      if(this.subscribeRespose.err==0){
        alert('Insert successfully')
        localStorage.setItem('uid', this.subscribeRespose.data._id)
        this.router.navigateByUrl('/home')
      }
      else{
        alert('Some issue occoured')
      }
    })
    this.myReactiveForm.reset();
  }

  ngOnInit() {
    this.myReactiveForm = this.formBuilder.group({
      'name':['', Validators.required],
      'email':['', Validators.required, Validators.email]
    })
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    // this.myReactiveForm.statusChanges.subscribe(
    //   (status)=> { console.log(status)
    //   this.formStatus = status
    //   }
    // )
    // in html form [ngClass]="formStatus"
    
  }

}
