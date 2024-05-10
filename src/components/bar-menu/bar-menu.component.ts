import {Component, NgModule, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectTrigger } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';

interface Options {
  value: string;
  viewValue: string;
  route: string;
}

@Component({
  selector: 'app-bar-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatSelectTrigger, MatButtonToggleModule, MatMenuModule],
  templateUrl: './bar-menu.component.html',
  styleUrl: './bar-menu.component.scss'
})


export class BarMenuComponent {

 constructor(private router: Router){}
  displayContent: boolean = false;
  isHidden: boolean = true;
  selectedValue: string = "";

  toggleDisplay() {
    this.displayContent = true;
  }
  
  display(){
    this.displayContent = false;
  }

  redirectToAnyPage(url: string){
    window.location.href = url;
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }

  items: Options[] = [
    {value: 'about_us', viewValue: 'About Us', route: '/aboutUs'},
    {value: 'services', viewValue: 'Services' , route: '/services'},
    {value: 'products', viewValue: 'Products' , route: '/products'},
    {value: 'login', viewValue: 'Login' , route: '/login'},
    {value: 'shopping_cart', viewValue: 'Shopping Cart' , route: '/cart'}
  ];

}
