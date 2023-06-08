import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Newconnect } from '../newconnect';
import { NewconnectService } from '../newconnect.service';

@Component({
  selector: 'app-newdongle',
  templateUrl: './newdongle.component.html',
  styleUrls: ['./newdongle.component.css']
})
export class NewdongleComponent implements OnInit {

  newconnect : Newconnect=new Newconnect();  
  custvar :any;

  constructor(private newconnectservice:NewconnectService) { }
  connectform=new FormGroup({   
    name : new FormControl('' , [Validators.required ] ),
    mail : new FormControl('',[Validators.required]),  
    aadhar : new FormControl('' , [Validators.required ])  ,
    mobile_no : new FormControl('' , [Validators.required ] ),
    password : new FormControl('',[Validators.required]),  
    type : new FormControl('' , [Validators.required ])  ,
    address : new FormControl('' , [Validators.required ] ),
    pincode : new FormControl('',[Validators.required])
  });

  Submit(){ 
    this.custvar=this.connectform.value;  
    
    this.newconnect.name=this.connectform.value.name;
    this.newconnect.mail=this.connectform.value.mail;
    this.newconnect.aadhar=this.connectform.value.aadhar;
    this.newconnect.mobile_no=this.connectform.value.mobile_no;
    this.newconnect.password=this.connectform.value.password;
    this.newconnect.type=this.connectform.value.type;
    this.newconnect.address=this.connectform.value.address;
    this.newconnect.pincode=this.connectform.value.pincode;
    console.log("hi");
    this.save();  
    this.connectform.reset();
  }

  save() {​                                   //Calls the REST API throgh the services
  this.newconnectservice.createInquiry(this.newconnect)
      .subscribe( data => {
        alert("Thank you for your purchase");
      });
      this.newconnect = new Newconnect();
  };

  ngOnInit(): void {
  }
}
