import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.productsData = [];
  }
 
  ngOnInit() {
    this.getAllProducts();
  }
 
  getAllProducts() {
    //Get saved list of products
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.productsData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in product data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllProducts();
    });
  }
  
  }


