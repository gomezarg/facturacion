import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductResponse } from './productresponse';
import { ProductService } from './product.service';
import { MatTable, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'description', 'price','stock',  'action'];
  dataSource : any;





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
			this.dataSource = new MatTableDataSource(response.data);
		});
  }

  ngOnInit() {
	}

	generateTable() {
		this.productService.getProduct().subscribe(response => {
			this.products = response;
			this.dataSource = new MatTableDataSource(response.data);
		});
	}
	
	deleteProduct(id) {
		this.productService.delete(id).subscribe(resp => {
			console.log(resp);
			this.generateTable();
		});
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
		this.generateTable();
	});

	this.productService.getProduct().subscribe(response => {
		this.products = response;
	});

	this.name = '';
	this.description = '';
	this.price = null;
  }
}
