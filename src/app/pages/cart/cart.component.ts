import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Iproduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }
removeCartItems(){
  //Call service to remove items from cart
  this.dService.emptyCart();
}

removeItem(id: Iproduct){
  this.dService.removeItemFromCart(id);
}
}
