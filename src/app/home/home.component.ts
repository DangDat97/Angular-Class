import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  className:string ='T2210M';
  NumberStudent:number = 2;
  textColor:string = 'text-primary';
  categories:string[] = [
    'Fashion',
    'Watch',
    'deamon',
    'fasda'
  ];
  product:any = {
    name: 'iphone14',
    price: 29000,
  };

  products: any =[
    {
      id: 1,
      name: 'iphone14',
      price: 29000,
      sl:10
    },
    {
      id: 2,
      name: 'iphone13',
      price: 29000,
      sl:0
    },
    {
      id: 3,
      name: 'iphone12',
      price: 29000,
      sl:5
    },
    {
      id: 4,
      name: 'iphone11',
      price: 29000,
      sl:15
    },
    {
      id: 5,
      name: 'iphone10',
      price: 29000,
      sl:10
    },
  ];


  addStudent(){
    this.NumberStudent++;
  }
  removeStudent(){

    if(this.NumberStudent>0){
      this.NumberStudent--;
    }
    if(this.NumberStudent==0){
      this.textColor='text-danger';
    }
  }
}
