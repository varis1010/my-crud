import { Component, OnInit,Input } from '@angular/core';
import { Products } from '../products';
import{ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import{ProductsService} from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Products;

  constructor(
    private route : ActivatedRoute,
    private productsService: ProductsService,
    private location : Location
  ) { }

  ngOnInit() {
    this.updateProduct();
  }


  updateProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.updateProduct(id).subscribe(product => this.product = product);
  }

  goBack():void{
      this.location.back();
      }
}
