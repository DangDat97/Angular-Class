import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent {
  product: any = [];
  textCate: string='';
  category: any = [];
  url: string='';
  sl: number=4;
  skip: number=0;
  constructor(private route: ActivatedRoute, private http:HttpClient) {

  }
  loadMore(){
    this.sl=this.sl+4;
    this.getProduct();
  }
  nextPage(){
    this.skip=this.sl+this.skip;
    this.getProduct();
  }
  ngOnInit(){
    this.getCategory();
    this.route.params.subscribe(params=>{
      this.textCate = params['textCate'];
      this.getProduct();
    })

  }
  getProduct(){
    if(this.textCate==''){
      this.url = 'https://dummyjson.com/products?limit='+this.sl+'&skip='+this.skip;
    }else{
      this.url = 'https://dummyjson.com/products/category/'+this.textCate;
    }

    this.http.get<any>(this.url).subscribe(data =>{
      this.product=data.products;
    })
    //set data to product
  }
  getCategory(){
    const url ='https://dummyjson.com/products/categories';
    this.http.get<any>(url).subscribe(data=>{
      this.category=data;
    })
  }

}
