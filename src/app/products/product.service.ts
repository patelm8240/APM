import { Injectable } from "@angular/core";
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { from } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ProductService{
    private productURL = 'api/products/products.json';
    constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productURL);
    }
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
          map((products: IProduct[]) => products.find(p => p.productId === id))
        );
      }
}