import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription,  concatMap } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SearchService } from 'src/app/shared/services/search.service';

import { ProductsType } from 'src/types/product.type';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductsType[] = [];
  loading : boolean = false;
  private subs: Subscription = new Subscription();
  searchWord: string = "";
  title: string = 'Наши чайные коллекции';

  constructor(private productService: ProductsService, private searchService: SearchService,
    private router: Router) {

   }
  ngOnInit(): void {

    this.subs.add(
      this.searchService.getData().pipe(
        concatMap((word:string)=> {
          if(word) {
            this.title= 'Результаты поиска по запросу ' + word;
          } else {
            this.title= 'Наши чайные коллекции' ;
          }
          this.loading = true ;
          return this.productService.getProducts(word);
          }),
          // map( data=> {
          //   return Object.values(data);
          //   }
          // )
        )
      .subscribe({
          next: (data:ProductsType[])=> {
            if(!data.length) {
                this.title = 'Ничего не найдено';
            }
            console.log(data)
            this.products = data ;
            this.loading = false ;
      },
        error: ()=> {
          this.router.navigate(['/']);
        }
       })
    );
  }

  ngOnDestroy():void {
    this.subs.unsubscribe();
  }

}


