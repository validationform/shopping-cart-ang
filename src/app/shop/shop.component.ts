import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { shopData } from '../models/shop';
import { cart } from '../models/shop';
import { ProductsDetailsService } from 'src/services/products-details.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  // @Input() public cartDataFromHeader: any;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  showMe = true;
  i: number = 0;
  flag: number = 0;
  a: number = 0;
  cartItem: number = 0;
  cartArray: cart[] = [];
  cartArray1: any;
  shop: shopData[] = [];
  shopData1: any;
  constructor(private productsData: ProductsDetailsService) {
    this.productsData.products().subscribe((data) => {
      console.log('Data=>', data);
    });
  }
   
  ngOnInit(): void {
    //fetch data through server
    this.shopData1 = this.productsData.products();
  }

  onToggle(): void {
    this.showMe = !this.showMe;
  }
   
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
    return this.cartArray;
  }
}
