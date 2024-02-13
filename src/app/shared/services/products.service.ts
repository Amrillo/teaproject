import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProductsType } from '../../../types/product.type';
import { OrderType } from '../../../types/order-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

   getProducts(searchedWord?:string): Observable<ProductsType[]> {
      let params: HttpParams = new HttpParams();
      if(searchedWord) {
        params =   params.append('search', searchedWord);
      }
       return this.http.get<ProductsType[]>(`${environment.apiURL}tea`,{params});
   }

    getProduct(id:number): Observable<ProductsType> {
      let params: HttpParams = new HttpParams().append('id', id);
       return this.http.get<ProductsType>(`${environment.apiURL}tea`, {params});
    }

    createOrder(data: OrderType) {
        return this.http.post<{success: number}>(`${environment.apiURL}order-tea`, data);
    }

}
