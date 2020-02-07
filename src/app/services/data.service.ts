import { Injectable } from '@angular/core';
import { Iproduct } from 'src/interfaces/iproduct';
import { UserIn } from 'src/interfaces/user-in';
import { Observable, of } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproduct[] = [];
  products: Iproduct[] =[
{
    id: '1',
    pName: 'Byzantine Lamp',
    pNameURL:'Byzantine',
    pDesc: '•This lamp has only been used one other time, resulting in the fall of the Byzantine Empire! The Lamp has been dormant ever since!',
    pDesc2: '•Rub the lamp, and whisper "Give wish Pls" and a genie will appear!',
    pDesc3: '• We are not reponsible for any and all wishes that are made by customers! Be careful what you wish for!',
    pDesc4:'• Only stipulation is you that you cannot wish for more wishes!',
    price: 'Only $2,000 USD!',
    additionalInfo: '',
    qty: 0,
    pic: '../../assets/item1Lamp.jpeg'
},
{
  id: '2',
  pName: 'Rose Lamp',
  pNameURL:'Rose',
  pDesc: '• This lamp was used during The War of the Roses, but what the user wished for is still unknown!',
  pDesc2:  '•Rub the lamp, and whisper "Give wish Pls" and a genie will appear! However, this Lamp"s Genie has a time limit. You only have 5 minutes to choose per wish!',
  pDesc3: '• We are not reponsible for any and all wishes that are made by customers! Be careful what you wish for!',
  pDesc4:'• Only stipulation is you that you cannot wish for more wishes!',
  price: 'Only $4,000 USD!',
  additionalInfo: '',
  qty: 0,
  pic: '../../assets/lampTwo.jpg'
},
{
  id: '3',
  pName: 'Cursed Lamp',
  pNameURL:'Byzantine',
  pDesc: ' • This lamp is of the Cursed variety! This lamp contains the only Genie that allows the user to wish for more wishes! However, the user is cursed with what they fear the most, if they choose to wish for more wishes.',
  pDesc2: '•Rub the lamp, and whisper "Give wish Pls" and a genie will appear!',
  pDesc3: '• We are not reponsible for any and all wishes that are made by customers! Be careful what you wish for!',
  pDesc4:'',
  price: 'Only $6,000 USD!',
  additionalInfo: '',
  qty: 0,
  pic: '../../assets/lampThree.jpg'
},
]

userList: UserIn [] = [
// PUSHING USERS INTO THIS LIST
//THROUGH JSON
]
  constructor() { }

  getProducts(): Iproduct[]{
    return this.products;
  }

  getProduct(sku: string): Observable <Iproduct> {
    return of( 
    this.products.find(
      x => x.id === sku
    ));
  }
  
  addToCart(cartItem:Iproduct){
    if(!this.itemsInCart.includes(cartItem)){
      cartItem.qty++;
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart)
    }
    else{
      //search for the Item in your cart
      //then add +1 to quant

    }

  }


  getCartItems():Iproduct[]{
    return this.itemsInCart;
  }

  emptyCart(){
    this.itemsInCart.length = 0;
  }

  removeItemFromCart(id: Iproduct){
    //find the index location of product
   const index = this.findIteminCart(id)
   // Perform a Splice
   this.itemsInCart.splice(index, 1);
   
  }

  findIteminCart(id: Iproduct): number{
    //find the product, the ID in Cart
    //
    return this.itemsInCart.indexOf(id);
  }

  checkIfUserExists(email:string): boolean{
    //search for email
    let result = false;
    if(this.userList.find(x => email.toLowerCase() === x.email) !== undefined){
      result = true;
    }
    return result;
  }

  checkCred(email: string, passWord:string):boolean {
    let result = false;
    const didIFindIt = this.userList.find(
      x => x.email === email
      );
      
if (didIFindIt !== undefined){
// check for password
if(didIFindIt.passWord === passWord) {
result = true;
}
}
    // if(email === this.userList[0].email){
    //   if(passWord === this.userList[0].passWord)
    //   result = true;
    // }
    return  result;
  }

  addUser(userAccount:UserIn){
    // const userAccount: UserIn = {
    //   email: eM.toLowerCase(),
    //   passWord: pW
    // };
    this.userList.push(userAccount);
    localStorage.setItem('user', JSON.stringify(this.userList));
    console.log(this.userList);
  }

  setUserList(){
    if(JSON.parse(localStorage.getItem('user'))){
      this.userList = JSON.parse(localStorage.getItem('user'));
    }
  }
}
