import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout.component';
import { OrderComponent } from './features/order/order.component';

const routes: Routes = [

  {path: '', component: LayoutComponent,  
   children: [
    {path: '', loadChildren: ()=> import('./features/home/home.module').then(m=>m.HomeModule) },
    {path: 'catalog', loadChildren: ()=> import('./features/products/products.module').then(m=>m.ProductsModule)}
    ]
  },
  {path : 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
