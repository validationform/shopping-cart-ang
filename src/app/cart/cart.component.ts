import { Component, OnInit,Input } from '@angular/core';
import { cart } from '../models/shop';
import { shopData } from '../models/shop';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() public shopData: any = [];
  @Input() public cd: any;
  @Input() public shopAdd: any;
  //@Input() public onToggleS: any;
  //showMe =true;
  //pro:any;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    //this.shopData = this.cart.addtoCart(this.shopAdd);
    //this.onToggleS;
    //this.showMe= !this.showMe;
  }

}
