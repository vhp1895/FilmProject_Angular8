import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { FormComponent } from './form.component';


const routes: Routes = [
  {
    path: "", component: FormComponent, children: [
      {path: "register" , component: RegisterComponent},
      {path: "signin" , component: SigninComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
