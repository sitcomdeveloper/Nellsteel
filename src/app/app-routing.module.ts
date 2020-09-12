import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './header/contactus/contactus.component';
import { HomeComponent } from './header/home/home.component';
import { SocialComponent } from './header/social/social.component';
import { QualityComponent } from './header/quality/quality.component';
import { IntroductionComponent } from './quality/introduction/introduction.component';
import { QualitycontrolComponent } from './quality/qualitycontrol/qualitycontrol.component';
import { OhsasComponent } from './quality/ohsas/ohsas.component';
import { IsoComponent } from './quality/iso/iso.component';
import { PolicyComponent } from './quality/policy/policy.component';
import { NellsteelComponent } from './header/nellsteel/nellsteel.component';
import { VideoComponent } from './nellstel/video/video.component';
import { SpottvComponent } from './nellstel/spottv/spottv.component';
import { ConstructionComponent } from './nellstel/construction/construction.component';
import { HrComponent } from './nellstel/hr/hr.component';
import { SteelComponent } from './nellsteel/steel/steel.component';
import { ProductsComponent } from './header/products/products.component';
import { WirerodComponent } from './products/wirerod/wirerod.component';
import { WiremeshComponent } from './products/wiremesh/wiremesh.component';
import { BilletComponent } from './products/billet/billet.component';
import { HotrolledComponent } from './products/hotrolled/hotrolled.component';
import { SearchComponent } from './header/search/search.component';
import { SignupComponent } from './header/signup/signup.component';
import { ForgotComponent } from './header/forgot/forgot.component';
import { LoginComponent } from './header/login/login.component';
import { NewsComponent } from './header/news/news.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
 
  {path:'contactus',component:ContactusComponent},
  {path:'social',component:SocialComponent},
  {path:'search',component:SearchComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'news', component:NewsComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'quality',component:QualityComponent,
  
   children:[
     {path:'',redirectTo:'introduction',pathMatch:'full'},
     {path:'introduction',component:IntroductionComponent},
     {path:'qualitycontrol',component:QualitycontrolComponent},
     {path:'ohsas',component:OhsasComponent},
     {path:'iso',component:IsoComponent},
     {path:'policy',component:PolicyComponent}
   ]},


   {path:'nellsteel',component:NellsteelComponent,
    children:[
      {path:'',redirectTo:'steel',pathMatch:'full'},
      {path:'steel',component:SteelComponent},
      {path:'video',component:VideoComponent},
      {path:'spottv',component:SpottvComponent},
      {path:'construction',component:ConstructionComponent},
      {path:'hr',component:HrComponent},
      {path:'nellsteel',component:NellsteelComponent}
    ]},
    {path:'products',component:ProductsComponent,
      children:[
        {path:'',redirectTo:'hotrolled',pathMatch:'full'},
        {path:'hotrolled',component:HotrolledComponent},
        {path:'wirerod',component:WirerodComponent},
        {path:'billet',component:BilletComponent},
        {path:'wiremesh',component:WiremeshComponent}
      ]
    },
  
  

  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

