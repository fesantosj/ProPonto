import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CargoRoutingModule } from './cargo-routing.module';
import { CargoPage } from './cargo.page';
import { ComponentsAntdModule } from 'src/app/template/components/componentes-antd.module';

@NgModule({
  imports: [
    CargoRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsAntdModule,    
  ],
  declarations: [CargoPage],
  exports: [CargoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CargoModule {}
