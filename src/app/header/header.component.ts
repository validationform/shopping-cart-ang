import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemValue: number;
  //@Input()  public a1:number;
  img = '../../assets/flipkart-plus_8d85f4.png';

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemValue = this.cartService.cartItem;
    
    //this.cartService.addCart(shopVar);
   
  }
  onClick(): void {
    //this.cartItemValue = this.cartItemValue + 1;
    this.router.navigate(['/cart'])
  }

}
/*  this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    }) */
