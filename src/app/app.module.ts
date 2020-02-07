import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './pages/items/items.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePwComponent } from './change-pw/change-pw.component';
import { ChangeShippingComponent } from './change-shipping/change-shipping.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ItemsComponent,
    AboutUsComponent,
    CartComponent,
    SignInComponent,
    HomeComponent,
    CheckoutComponent,
    AccountInfoComponent,
    SignInModalComponent,
    ChangeEmailComponent,
    ChangePwComponent,
    ChangeShippingComponent,
    CreateAccountComponent,
    MyOrdersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
