import { Component, OnInit } from '@angular/core';
import { CreateinqserService } from '../createinqser.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Inquiry } from '../inquiry';

@Component({
  selector: 'app-createinquiry',
  templateUrl: './createinquiry.component.html',
  styleUrls: ['./createinquiry.component.css']
})
export class CreateinquiryComponent implements OnInit {

  constructor( private createinqserservice:CreateinqserService) { }

  inquiry : Inquiry=new Inquiry();  
  custvar :any;

  ngOnInit(): void {
  }

  inquirysaveform=new FormGroup({   
    custmobile: new FormControl('' , [Validators.required ] ),
    custsubject:new FormControl('',[Validators.required]),  
    custmessage:new FormControl()  
  });

  saveInquiry(_saveInquiry){ 
    this.custvar=this.inquirysaveform.value;  
    
    this.inquiry.mobile=this.inquirysaveform.value.custmobile;
    this.inquiry.subject=this.inquirysaveform.value.custsubject;
    this.inquiry.message=this.inquirysaveform.value.custmessage;
  
    this.save();  
    this.inquirysaveform.reset();
  }

  save() {​                                   //Calls the REST API throgh the services
  this.createinqserservice.createInquiry(this.inquiry)
      .subscribe( data => {
        alert("Compliant Registered Successfully");
      });
      this.inquiry = new Inquiry();
  };
} 
