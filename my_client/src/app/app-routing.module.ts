import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisComponent } from './regis/regis.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCarpetComponent } from './product-carpet/product-carpet.component';
import { ProductDecorComponent } from './product-decor/product-decor.component';
import { ProductInteriorComponent } from './product-interior/product-interior.component';
import { ProductOtherComponent } from './product-other/product-other.component';
import { ProductTreeComponent } from './product-tree/product-tree.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: "full" },
  { path: 'home-page', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regis', component: RegisComponent },
  { path: 'forgotpw', component: ForgotpwComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'edit-password', component: EditPasswordComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent },
  { path: 'products/1', component: ProductCarpetComponent },
  { path: 'products/2', component: ProductDecorComponent },
  { path: 'products/3', component: ProductInteriorComponent },
  { path: 'products/4', component: ProductOtherComponent },
  { path: 'products/5', component: ProductTreeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
