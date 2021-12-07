import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Type } from '../Type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private user: UserService) { }

  cart: Type[];
  public sum = 0;
  public displayedColumns = ['name', 'image', 'quantity', 'price', 'action'];

  ngOnInit(): void {
    this.cart = this.user.cart;
    console.log(this.cart);
    for (const value of this.cart)
    {
      this.sum = this.sum + value.price ;
    }
  }
  remove(value: Type): void
  {
    this.cart = this.cart.filter(x => x.name !== value.name);
    this.user.cart = this.user.cart.filter(x => x.name !== value.name);
    this.sum = this.sum - value.price ;
    console.log(this.user.cart);
    console.log(this.cart);
  }
}
