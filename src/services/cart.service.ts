import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from 'src/app/models/shop';
import { shopData } from 'src/app/models/shop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  showMe = true;
  cartArray: cart[] = [];
  cartItem: number = 0;
  i: number = 0;
  flag: number = 0;
  a: number = 0;
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  onToggle(): void {
    this.showMe = !this.showMe;
  }

  ngOnInit() {}
  addCart(shopVar: any) {
    console.log('id=>' + shopVar.id);
    this.cartItem = this.cartItem + shopVar.qty;
    //this.notify.emit(this.cartItem)

    if (this.cartArray[this.a] == null) {
      this.cartArray.push({
        id1: shopVar.id,
        img1: shopVar.img,
        productTitle1: shopVar.productTitle,
        productName1: shopVar.productName,
        desc1: shopVar.desc,
        aimg1: shopVar.aimg,
        amt1: shopVar.amt,
        qty1: shopVar.qty,
      });
      console.log('inserted');
    } else {
      for (this.i = 0; this.i < this.cartArray.length; this.i = this.i + 1) {
        //this.n = this.cartArray[this.i].id1;
        //this.b = shopVar.id;
        // if (this.n == this.b) {
        if (this.cartArray[this.i].id1 === shopVar.id) {
          this.flag = 1;
          this.a = this.i;
        }
      }
      if (this.flag == 0) {
        console.log('add to cart');
        this.cartArray.push({
          id1: shopVar.id,
          img1: shopVar.img,
          productTitle1: shopVar.productTitle,
          productName1: shopVar.productName,
          desc1: shopVar.desc,
          aimg1: shopVar.aimg,
          amt1: shopVar.amt,
          qty1: shopVar.qty,
        });
        console.log('inserted2');
      } else {
        this.cartArray[this.a].qty1 = this.cartArray[this.a].qty1 + shopVar.qty;
        console.log('inserted3');
      }
    }
    //this.notify.emit(this.cartArray);
    console.log('cart Array Shop=>', this.cartArray);
    return this.cartArray;
  }
}
