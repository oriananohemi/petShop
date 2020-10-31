import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart/cart.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;

  total$: Observable<number>;

  logo = 'assets/images/logo.png';

  // constructor(
  //   private cartService: CartService
  // ) {
  //   this.cartService.cart$.subscribe(products => {
  //     console.log(products);
  //     this.total = products.length;
  //   });
  //  }

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length));
   }

  ngOnInit(): void {
  }

}