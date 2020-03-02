import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsouranceComponent } from './insourance/insourance.component';
import { ClaimsComponent } from './claims/claims.component';
import { PravnaComponent } from './pravna/pravna.component';
import { VodicpComponent } from './vodicp/vodicp.component';
import { SvrhaComponent } from './svrha/svrha.component';
import { OstaloComponent } from './ostalo/ostalo.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'insourance', component:InsouranceComponent },
  { path:'claims', component:ClaimsComponent },
  { path:'pravna', component:PravnaComponent },
  { path:'vodicp', component:VodicpComponent },
  { path:'svrha', component:SvrhaComponent },
  { path:'ostalo', component:OstaloComponent },
  { path:'products', component:ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
