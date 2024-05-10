import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from '../views/about-us/about-us.component';
import { LoginComponent } from '../views/login/login.component';
import { OurProductsComponent } from '../views/our-products/our-products.component';
import { OurServicesComponent } from '../views/our-services/our-services.component';
import { ShoppingCartComponent } from '../views/shopping-cart/shopping-cart.component';


export const routes: Routes = [
    {path: 'aboutUs', component: AboutUsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: OurProductsComponent},
    {path: 'services', component: OurServicesComponent},
    {path: 'cart', component: ShoppingCartComponent}
];
