import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public name:string;
  public color:string;

  constructor(private productService:ProductsService) {
      this.name = '';
      this.color='';
   }

  ngOnInit() {
  }

     onSubmit():void{
      this.productService.addProducts(this.name,this.color);
      this.name = '';
      this.color = '';
    }
}
