import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recharge } from '../recharge';
import { RechargeserService } from '../rechargeser.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  recharge : Recharge=new Recharge();  
  custvar :any;

  constructor(private rechargeserservice : RechargeserService) { }

  rechargeform=new FormGroup({   
    mobile_no: new FormControl('' , [Validators.required ] ),
    plan_price:new FormControl('',[Validators.required]),  
  });

  Recharge(){ 
    this.custvar=this.rechargeform.value;  
    
    this.recharge.mobile_no=this.rechargeform.value.mobile_no;
    this.recharge.plan_price=this.rechargeform.value.plan_price;
  
    this.save();  
    this.rechargeform.reset();
  }

  save() {​                                   //Calls the REST API throgh the services
  this.rechargeserservice.createRecharge(this.recharge)
      .subscribe( data => {
        alert("Recharged Successfully");
      });
      this.recharge = new Recharge();
  };
  ngOnInit(): void {
  }

}
