import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [LoginRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  schemas: [],
})
export class LoginModule {}
