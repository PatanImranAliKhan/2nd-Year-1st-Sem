import { Component, OnInit } from '@angular/core';
import { Type } from '../Type';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public data: Type[];
  public a;
  public sub = false;
  public con = false;
  public c;
  public n = [1, 2, 3, 4];
  public b = 1;
  public sports = ['Cricket', 'FootBall', 'Badminton', 'Hockey', 'Golf' , 'All the above'];
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  validateTopic(value): void
  {
    if (value === null)
    {
      this.sub = true;
    }
    else
    {
      this.sub = false;
    }
    this.b = 1;
  }
  submit(): void
  {
    this.con = true;
    const kl = this.a;
    if ( kl === 'Cricket')
    {
      this.data = this.user.Cricket;
    }
    else if ( kl === 'FootBall')
    {
      this.data = this.user.FootBall;
    }
    else if ( kl === 'Hockey')
    {
      this.data = this.user.Hockey;
    }
    else if ( kl === 'Golf')
    {
      this.data = this.user.Golf;
    }
    else if ( kl === 'Badminton')
    {
      this.data = this.user.Badminton;
    }
    else if ( kl === 'All the above')
    {
      this.data = this.user.All;
    }
  }
  tocart(value): void
  {
    const op = this.user.cart.find(x => x.name === value.name);
    if ( op == null)
    {
      const ar: Type = {
        name: value.name,
        image: value.image,
        description: value.description,
        price: value.price * this.b,
        availability: this.b
      };
      this.user.cart.push(ar);
    }
    this.b = 1;
  }
}
