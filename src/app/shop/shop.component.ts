import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { shopData } from '../models/shop';
import { cart } from '../models/shop';
import { CartService } from 'src/services/cart.service';
import { ProductsDetailsService } from 'src/services/products-details.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  // @Input() public cartDataFromHeader: any;
  
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  showMe = true;
  i: number = 0;
  flag: number = 0;
  a: number = 0;
  cartItem: number = 0;
  cartArray: cart[] = [];
  cartArray1: any;
  shop: shopData[] = [];
  shopData1: any;
  constructor(private productsData: ProductsDetailsService, private cartService:CartService) {
    this.productsData.products().subscribe((data) => {
      console.log('Data=>', data);
    });
  }


  ngOnInit(): void {
    //fetch data from server
    this.shopData1 = this.productsData.products();  
  }

  addCart(shopVar:any){
    this.cartService.addCart(shopVar);
    //this.a = this.cartService.cartItem;
    //this.a =this.a + 1;
  }

  onToggle(): void {
    this.showMe = !this.showMe;
  }

}
