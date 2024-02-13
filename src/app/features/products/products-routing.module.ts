import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: ':id', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
