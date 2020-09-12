import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './header/contactus/contactus.component';
import { HomeComponent } from './header/home/home.component';
import { SocialComponent } from './header/social/social.component';
import { QualityComponent } from './header/quality/quality.component';
import { ProductsComponent } from './header/products/products.component';
import { IntroductionComponent } from './quality/introduction/introduction.component';
import { QualitycontrolComponent } from './quality/qualitycontrol/qualitycontrol.component';
import { OhsasComponent } from './quality/ohsas/ohsas.component';
import { IsoComponent } from './quality/iso/iso.component';
import { PolicyComponent } from './quality/policy/policy.component';
import { NellsteelComponent } from './header/nellsteel/nellsteel.component';
import { VideoComponent } from './nellstel/video/video.component';
import { SpottvComponent } from './nellstel/spottv/spottv.component';
import { HrComponent } from './nellstel/hr/hr.component';
import { ConstructionComponent } from './nellstel/construction/construction.component';
import { SteelComponent } from './nellsteel/steel/steel.component';
import { HotrolledComponent } from './products/hotrolled/hotrolled.component';
import { WirerodComponent } from './products/wirerod/wirerod.component';
import { BilletComponent } from './products/billet/billet.component';
import { WiremeshComponent } from './products/wiremesh/wiremesh.component';
import { SearchComponent } from './header/search/search.component';
import { from } from 'rxjs';
import { SignupComponent } from './header/signup/signup.component';
import { ForgotComponent } from './header/forgot/forgot.component';
import { LoginComponent } from './header/login/login.component';
import { NewsComponent } from './header/news/news.component';
import { NewsService } from './_service/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    HomeComponent,
    SocialComponent,
    QualityComponent,
    ProductsComponent,
    IntroductionComponent,
    QualitycontrolComponent,
    OhsasComponent,
    IsoComponent,
    PolicyComponent,
    NellsteelComponent,
    VideoComponent,
    SpottvComponent,
    HrComponent,
    ConstructionComponent,
    SteelComponent,
    HotrolledComponent,
    WirerodComponent,
    BilletComponent,
    WiremeshComponent,
    SearchComponent,
    SignupComponent,
    LoginComponent,
    ForgotComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (http:HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
          deps: [HttpClient]
        }
      }
    )
   
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
