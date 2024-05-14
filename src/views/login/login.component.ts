import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../services/products.service';
import { catchError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormField, MatError, ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 loginForm!: FormGroup;
 
  
 constructor(private formBuilder: FormBuilder, public productsService: ProductsService){
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
 }
 
 ngOnInit(): void {

 }

onSubmit (){
   if(this.loginForm.valid){
     alert(this.loginForm.value)
   }
   else{
    this.loginForm.markAllAsTouched();
   }
}

generateAllProducts(): void {

  this.productsService.generateProducts().subscribe({
    next: (data) => {
      console.log(data)
    },
    error: (e) => {console.log(e)}
  })
}

}
