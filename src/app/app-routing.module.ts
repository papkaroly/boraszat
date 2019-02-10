import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolunkComponent } from './rolunk/rolunk.component';
import { TermekekComponent } from './termekek/termekek.component';
import { VendeghazComponent } from './vendeghaz/vendeghaz.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/Kezdő', pathMatch: 'full' },
  { path: 'Kezdő', component: HeaderComponent },
  { path: 'Rólunk', component: RolunkComponent },
  { path: 'Termékek', component: TermekekComponent },
  { path: 'Vendégház', component: VendeghazComponent },
  { path: 'Kapcsolat', component: KapcsolatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
