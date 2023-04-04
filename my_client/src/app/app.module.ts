import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { RegisComponent } from './regis/regis.component';
import { BlogComponent } from './blog/blog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { ContactComponent } from './contact/contact.component';
import { ProductCarpetComponent } from './product-carpet/product-carpet.component';
import { ProductDecorComponent } from './product-decor/product-decor.component';
import { ProductInteriorComponent } from './product-interior/product-interior.component';
import { ProductOtherComponent } from './product-other/product-other.component';
import { ProductTreeComponent } from './product-tree/product-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ForgotpwComponent,
    LoginComponent,
    RegisComponent,
    BlogComponent,
    ShoppingCartComponent,
    AdminComponent,
    LoginAdminComponent,
    ProductDetailComponent,
    BlogDetailComponent,
    AccountComponent,
    EditPasswordComponent,
    NewArrivalsComponent,
    ContactComponent,
    ProductCarpetComponent,
    ProductDecorComponent,
    ProductInteriorComponent,
    ProductOtherComponent,
    ProductTreeComponent,
    ProductCarpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true
    }),
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
