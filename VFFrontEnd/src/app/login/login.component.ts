import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  homedata : Register= new Register();
  nameuser: any;
  homedatas: any;
  inform: any;
  submitted: any;

  constructor(private loginservicesService:RegisterService,private _router:Router) { }
//should be changed as per get and post operation
  addform = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
//should be changed as per get and post operation
  submit(){
    console.log(this.addform.value);
    console.log("Submit successful");
    this.nameuser=this.addform.value;
    this.homedata.mobile=this.nameuser.mobile;
    this.homedata.password=this.nameuser.password;
   // this.save();
    this.validate();
    this.addform.reset();
  }

  save() { //Calls the REST API throgh the services
this.loginservicesService.createlogin(this.homedata).subscribe
    (data=>{console.log(data);
    this._router.navigate(['home'])}, 
    error=>console.log(error));
    this.homedata = new Register();
}

validate(){
  //Logic for validating the user credentials
  this.loginservicesService.getLoginList().subscribe(data =>{

    this.homedatas =data; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
for(this.inform in this.homedatas){
// console.log(this.inform.user_id);
// console.log(this.inform.password);
for (let i = 0; i < 20; i++) {
 // console.log ("Block statement execution no." + i);

    if(this.homedata.mobile == this.homedatas[i].mobile || this.homedata.password == this.homedatas[i].password){
console.log("finally validated!!!!");
this.submitted = true;
this._router.navigate(['home']);
break;
    }
    else{
this.submitted = false;
    }
  }
  }
  })
}

  ngOnInit(): void {
  }



}


