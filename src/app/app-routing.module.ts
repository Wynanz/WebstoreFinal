import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
//import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';



const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'account-info', component:AccountInfoComponent},
  {path: 'my-orders', component:MyOrdersComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: ':productName/:id', component: CartComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
