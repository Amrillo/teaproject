import { Component, Input, OnInit } from '@angular/core';
import { ProductsType } from 'src/types/product.type';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductsType ;

  constructor() {

    this.product = {
      description: "",
      id: 0,
      image : "",
      price: 0,
      title: "",
    }
   }

  ngOnInit(): void {
    

  }

}
