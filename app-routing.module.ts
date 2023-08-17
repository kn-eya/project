import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ConnectComponent } from './connect/connect.component';

const routes: Routes = [
  {path:'home',
  component:HomeComponent
},  
{path:'login',
component:LoginComponent
},
{path:'register',
component:RegisterComponent
},
{path:'navbar',
component:NavbarComponent
},
{path:'paiement',
component:PaiementComponent
},
{path:'connect',
component:ConnectComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
