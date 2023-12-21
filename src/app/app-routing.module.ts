import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SignupComponent from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { TrajetComponent } from './trajet/trajet.component';
import { AnnonceComponent } from './annonce/annonce.component';

const routes: Routes = [
  {path:'signup',
    component:SignupComponent
  },
  {path:'signin',
    component:SigninComponent
  },
  {path:'home',
  component:HomeComponent
},
{path:'trajet',
  component:TrajetComponent
},
{path:'annonce',
  component:AnnonceComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
