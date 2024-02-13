import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CatalogComponent, 
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, 
    SharedModule
  ],  
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
