import { Injectable } from '@angular/core';
import {Products} from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Products[];
  nextId:number;

  constructor() {
      this.products = [
        new Products(1,'Baleno','gray'),
        new Products(2,'MacBook','Space-gray'),
        new Products(3,'R15','gray'),
        new Products(4,'Activa','Silver'),
        new Products(5,'Iphone','Mat-Black')
      ];
      this.nextId = 6;
  }

  public getProducts():Products[]  {
    return this.products;
  }

  public addProducts(name,color):void{
    let product = new Products(this.nextId,name,color);
    let products = this.getProducts();
    this.products.push(product);
    this.nextId++;
  }

  public removeProduct(id:number):void{
      this.products = this.products.filter((product)=> product.id != id);
  }

  updateProduct(id:number):Observable<Products>{
    return of(this.products.find(product => product.id === id));
  }
}
