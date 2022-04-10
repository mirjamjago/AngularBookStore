import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { VendorMainComponent } from './components/vendor-main/vendor-main.component';
import { VendorBookshelfComponent } from './components/vendor-bookshelf/vendor-bookshelf.component';
import { VendorBookInfoComponent } from './components/vendor-book-info/vendor-book-info.component';
import { CustomerBookInfoComponent } from './components/customer-book-info/customer-book-info.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { FormsModule } from '@angular/forms';
import { CustomerMainComponent } from './components/customer-main/customer-main.component';
import { OrderComponent } from './components/order/order.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LogInComponent,
    SignUpComponent,
    MainShopComponent,
    VendorMainComponent,
    VendorBookshelfComponent,
    VendorBookInfoComponent,
    CustomerBookInfoComponent,
    AddNewBookComponent,
    CustomerMainComponent,
    OrderComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
