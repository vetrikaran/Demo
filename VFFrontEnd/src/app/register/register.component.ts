
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register1 : Register = new Register();
  custvar :any;
  
  tempsad !: String;
  rawObject !: object;

  constructor(private registerService : RegisterService ) { }

  contactForm = new FormGroup({
    custname: new FormControl(''),
    custmobile: new FormControl(''),
    custmail: new FormControl(''),
    custpassword: new FormControl(''),
  });

  createCustomer(): void {
    
    this.custvar=this.contactForm.value;// some wrong

    this.register1.name=this.contactForm.value.custname;
    this.register1.mobile=this.contactForm.value.custmobile;
    this.register1.mail=this.contactForm.value.custmail;
    this.register1.password=this.contactForm.value.custpassword;
    this.save();
    this.contactForm.reset();
  }

  save() {​                                   //Calls the REST API throgh the services
  this.registerService.createCustomer(this.register1)
  .subscribe( data => {
    alert("User Registered Successfully");
  });
      this.register1 = new Register();
  };


  ngOnInit(): void {
  }

}