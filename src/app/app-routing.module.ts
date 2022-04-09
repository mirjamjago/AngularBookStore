import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { CustomerBookInfoComponent } from './components/customer-book-info/customer-book-info.component';
import { CustomerMainComponent } from './components/customer-main/customer-main.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VendorBookInfoComponent } from './components/vendor-book-info/vendor-book-info.component';
import { VendorBookshelfComponent } from './components/vendor-bookshelf/vendor-bookshelf.component';
import { VendorMainComponent } from './components/vendor-main/vendor-main.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'shop', component: MainShopComponent},
  {path: 'shop/vendor/:userName', component: VendorMainComponent},
  {path: 'bookshelf/:userName', component: VendorBookshelfComponent},
  {path: 'info/vendor/:userName/:bookname', component: VendorBookInfoComponent},
  {path: 'addNew/:userName', component: AddNewBookComponent},
  {path: 'shop/customer/:userName', component: CustomerMainComponent},
  {path: 'info/customer/:userName/:bookname', component: CustomerBookInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
