import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsAntdModule } from 'src/app/template/components/componentes-antd.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsAntdModule,    
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
