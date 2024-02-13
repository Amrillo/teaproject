import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductsType } from 'src/types/product.type';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  product: ProductsType ;

  constructor(private productsServie : ProductsService,  private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.product =  {
        description: "",
        id: 0,
        image : "",
        price: 0,
        title: "",
      }
   }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params)=> {
      if(params['id']) {
        this.productsServie.getProduct(+params['id'])
        .subscribe({
          next: (data)=> {
            this.product = data;
          },
          error: ()=> {
            this.router.navigate(['/'])
          }
        })
      }
    })
  }
}
