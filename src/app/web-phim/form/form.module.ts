import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { MaterialModule } from 'src/app/_core/shared/material.module';
import { MyDirectiveModule } from 'src/app/my-directive/my-directive.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [FormComponent, RegisterComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormRoutingModule,
  ]
})
export class FormModule { }
