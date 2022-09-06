import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  showMe = true;
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
   // this.getTotalPrice();
    console.log(this.cartItemList)
  }
  
  onToggle(): void {
    this.showMe = !this.showMe;
  }
 
}

