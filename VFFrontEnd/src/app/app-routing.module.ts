import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateinquiryComponent } from './createinquiry/createinquiry.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostplansComponent } from './postplans/postplans.component';
import { PreplansComponent } from './preplans/preplans.component';
import { TrackinquiryComponent } from './trackinquiry/trackinquiry.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { RechargeComponent } from './recharge/recharge.component';
import { NewdongleComponent } from './newdongle/newdongle.component';
import { PremiumComponent } from './premium/premium.component';
import { PaybillComponent } from './paybill/paybill.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createinquiry', component: CreateinquiryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dongleplans', component: DongleplansComponent },
  { path: 'preplans', component: PreplansComponent },
  { path: 'postplans', component: PostplansComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: 'trackinquiry', component: TrackinquiryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newdongle', component: NewdongleComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'paybill', component: PaybillComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
