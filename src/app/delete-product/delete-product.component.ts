import { Component, OnInit,Input } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../products';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input()
  products:Products;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
  }


  removeProduct():void{
      this.productsService.removeProduct(this.products.id);
  }

}
