import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Categories, ProductRates, Products } from './entities/entities';
import { ProductViewDto } from './entities/dto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // x:number = 1;
  // list:number[]=[];
  // avg:number = 0;
  // y:number = 0;
  // result:number = 0;
  // z:number = 0;

  // printEvenDividers(){
  //   let list:number[]=[]

  //   for(let i=-this.n; i<=this.n; i++){
  //     this.n%i===0?list.push(i):console.log(i);
  //   }

  //   return list;
  // }

  // printMedian(){
  //   let list:number[]=[];
  //   list.push(this.x, this.y, this.z);
  //   list.sort((a, b)=> a-b);
  //   return list[Math.floor(list.length/2)];
  // }

  // divider(){
  //   let count = -1;
  //   let remainder = 0;

  //   while(this.x>=0){ 
  //     this.x-=this.y;
  //     count++;
  //   }
  //   remainder=this.x+this.y;

  //   return `Sonuç: ${count}, Kalan: ${remainder}`
  // }

  // takeAbs(num:number){
  //   let numC = num<0 ? num*-1 : num;
  //   return numC;
  // }

  // multiply(){
  //   if(this.y<0){

  //     let yClone = this.takeAbs(this.y);

  //     for(let i=0; i<yClone; i++){
  //       this.result-=this.x;
  //     }
  //   }

  //   for(let i=0; i<this.y; i++){
  //     this.result+=this.x;
  //   }

  //   return this.result;
  // }

  // printAvg(){
    
  // }

  searchText:string = "";
  productsList:Products[] = [
    {
      id: 1,
      name: "Keyboard",
      price: 200,
      categoryId: 1
    },
    {
      id: 2,
      name: "Mouse",
      price: 150,
      categoryId: 1
    }, 
    {
      id: 3,
      name: "Headset",
      price: 300,
      categoryId: 1
    },   
    {
      id: 4,
      name: "Purse",
      price: 75,
      categoryId: 2
    },   
    {
      id: 5,
      name: "Shoe",
      price: 190,
      categoryId: 2
    },   
    {
      id: 6,
      name: "Sunglass",
      price: 400,
      categoryId: 2
    },   
    {
      id: 7,
      name: "Dog food",
      price: 120,
      categoryId: 3
    },   
    {
      id: 8,
      name: "Cat food",
      price: 120,
      categoryId: 3
    },   
    {
      id: 9,
      name: "Cat litter",
      price: 40,
      categoryId: 3
    }   
  ];

  categoriesList:Categories[] = [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 2,
      name: "Fashion",
    },
    {
      id: 3,
      name: "Pet Products",
    },
  ];

  productRatesList:ProductRates[] = [
    {
      id: 1,
      productId: 1,
      rate: 3  
    },
    {
      id: 2,
      productId: 2,
      rate: 3
    },
    {
      id: 3,
      productId: 3,
      rate: 3
    },
    {
      id: 4,
      productId: 4,
      rate: 2
    },
    {
      id: 5,
      productId: 5,
      rate: 3
    },
    {
      id: 6,
      productId: 6,
      rate: 4
    },
    {
      id: 7,
      productId: 7,
      rate: 4
    },
    {
      id: 8,
      productId: 8,
      rate: 3.5
    },
    {
      id: 9,
      productId: 9,
      rate: 3
    },
  ];

  getRateByID(id:number):ProductRates|undefined{
    return this.productRatesList.find(rate => rate.id == id);
  }

  getRateAvgs(){
    return this.productRatesList.map(rates => rates.rate).reduce((acc, i) => acc+i, 0) / this.productRatesList.length;
  }

  getProductViewDto():ProductViewDto[]|undefined{
    let productViewList:ProductViewDto[]=
      this.productsList.map(products => {
        let rate = this.getRateByID(products.id);
        let rateAvg = this.getRateAvgs();
        let productViewListDto:ProductViewDto={
          id:products.id,
          categoryId:products.id,
          productId:products.id,
          productName:products.name,
          productPrice:products.price,
          productRate:rate?.rate,
          rateAvg:rateAvg
        }
        return productViewListDto;
      });

      return productViewList.filter(product => 
        this.searchText=="" ||
          (
            product.id.toString()==this.searchText ||
            product.categoryId.toString()==this.searchText ||
            product.productId.toString()==this.searchText ||
            product.productName.toLowerCase().includes(this.searchText.toLowerCase()) ||
            product.productPrice.toString()==this.searchText ||
            product.productRate?.toString()==this.searchText ||
            product.rateAvg.toString()==this.searchText
          )
      )
  }
}