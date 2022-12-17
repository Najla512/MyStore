import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [ 
{ path: '', component: LoginComponent},
//{ path: 'login', component: LoginComponent },
{ path: 'products', component: ProductsListComponent },
{ path: 'proudct/:id', component: ProductDetailsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
