import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public cd:any;
  @Input() public onToggleS: any;
  
  //cartItem1: number=0;
  showMe = true;
  img = '../../assets/flipkart-plus_8d85f4.png';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  
  }

  onToggle(): void {
    //this.showMe = !this.showMe;
      this.onToggleS;
    //this.router.navigate(['/cart']);
  }
}
