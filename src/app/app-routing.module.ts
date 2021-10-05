import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomersComponent } from './pages/customers/edit-customers/edit-customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'edit-customers', component: EditCustomersComponent },

  {path: '', pathMatch: 'full', redirectTo: 'customers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
