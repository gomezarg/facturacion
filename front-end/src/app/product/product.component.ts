import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductResponse } from './productresponse';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public name: string;
  public description: string;
  public price: number;

  public products: any;
    
  constructor(private productService: ProductService) { 
	this.name = '';
	this.description = '';
	this.price = null;

	this.productService.getProduct().subscribe(response => {
		this.products = response;
	});
  }

  ngOnInit() {
  }

  createProduct() {
	let productObject: Product;

	productObject = {
		name: this.name,
		description: this.description,
		price: this.price,
	}

	this.productService.postProduct(productObject).subscribe(response => {
		console.log(response);
	});

	this.productService.getProduct().subscribe(response => {
		this.products = response;
	});

	this.name = '';
	this.description = '';
	this.price = null;
  }
}
