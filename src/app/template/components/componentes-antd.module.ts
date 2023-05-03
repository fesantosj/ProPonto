import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  exports: [
    NzButtonModule,
    NzInputModule,
    NzDividerModule,    
    NzFormModule,
    NzIconModule,
    NzTableModule,
    NzDropDownModule,
  ]
})
export class ComponentsAntdModule { }
