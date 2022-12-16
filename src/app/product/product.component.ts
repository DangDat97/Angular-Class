import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id: number =0;
  product: any ={
    id: 1,
    title: 'Iphone 9',
    price: 549,
    thumnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    description:'An apple mobile which is nothing like apple\n',
    brand: 'Apple',
}
  constructor(private route: ActivatedRoute, private http:HttpClient) {

  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getProduct();
    })
  }
  // call API: https://dummyjson.com/products/ + this.id
  getProduct(){
    // call API
    const url = 'https://dummyjson.com/products/'+ this.id;
    this.http.get<any>(url).subscribe(data=>{
      this.product = data;
    })
    //set data to product
  }
}
