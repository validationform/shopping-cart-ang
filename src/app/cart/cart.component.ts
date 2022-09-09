import { Component, OnInit, Input } from '@angular/core';
import { cart } from '../models/shop';
import { shopData } from '../models/shop';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from 'src/services/cart.service';
import { ProductsDetailsService } from 'src/services/products-details.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productAddToCart: any;

  constructor(
    private cart: CartService,
    private productsData: ProductsDetailsService
  ) {}

  ngOnInit(): void {
    this.productAddToCart = this.cart.cartArray;
    console.log('Cart Data=>', this.productAddToCart);
  }
}
