import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';    
import {  FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateinquiryComponent } from './createinquiry/createinquiry.component';
import { TrackinquiryComponent } from './trackinquiry/trackinquiry.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PreplansComponent } from './preplans/preplans.component';
import { PostplansComponent } from './postplans/postplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { NewdongleComponent } from './newdongle/newdongle.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PremiumComponent } from './premium/premium.component';
import { PaybillComponent } from './paybill/paybill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateinquiryComponent,
    TrackinquiryComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent,
    PreplansComponent,
    PostplansComponent,
    DongleplansComponent,
    LoginComponent,
    FooterComponent,
    IntroComponent,
    RegisterComponent,
    NewdongleComponent,
    RechargeComponent,
    PremiumComponent,
    PaybillComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
