import { NgModule } from '@angular/core';
import { ThemeModule } from '../theme.module';
import { TableCustomersComponent } from './table-customers/table-customers.component';
import { CardCustomersComponent } from './card-customers/card-customers.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
        TableCustomersComponent,
        CardCustomersComponent,
  ],
    imports: [
      ThemeModule,
      CommonModule,
      FormsModule
    ], exports: [
        TableCustomersComponent,
        CardCustomersComponent
    ]
})
export class ComponentsModule { }