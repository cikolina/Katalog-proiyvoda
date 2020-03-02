import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CalendarModule} from 'primeng/calendar';
import { InsouranceComponent } from './insourance/insourance.component';
import { ClaimsComponent } from './claims/claims.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { PravnaComponent } from './pravna/pravna.component';
import { VodicpComponent } from './vodicp/vodicp.component';
import { SvrhaComponent } from './svrha/svrha.component';
import { OstaloComponent } from './ostalo/ostalo.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';

import { FizickaComponent } from './fizicka/fizicka.component';
import { ProductsComponent } from './products/products.component';
import {CarouselModule} from 'primeng/carousel';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InsouranceComponent,
    ClaimsComponent,
    PravnaComponent,
    VodicpComponent,
    SvrhaComponent,
    OstaloComponent,
    FizickaComponent,
    ProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    TabMenuModule,
    ButtonModule,
    CarouselModule
 



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
