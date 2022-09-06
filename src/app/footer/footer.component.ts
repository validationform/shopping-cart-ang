import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  img = '../../assets/payment-method_69e7ec.jpg';
  becomeSeller = '../../assets/bag.jpg';
  advertise = '../../assets/advertise.jpg';
  giftCard = '../../assets/gift_1.jpg';
  helpCenter = '../../assets/que.jpg';
  constructor() {}

  ngOnInit(): void {}
}
