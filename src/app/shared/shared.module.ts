import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { SearchComponent } from './components/search/search.component';
import { TextcutPipe } from './pipes/textcut.pipe';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PopupComponent, 
    SearchComponent, 
    TextcutPipe, 
    ProductComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ],  
  exports: [
    PopupComponent, 
    SearchComponent, 
    TextcutPipe,
    ProductComponent
  ]
})
export class SharedModule { }
