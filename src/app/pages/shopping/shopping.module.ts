import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DropdownModule } from 'primeng/dropdown';
import { AuthGuard } from 'src/app/core/auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisComponent } from './regis/regis.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    LoginComponent,
    MyAccountComponent,
    RegisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild([
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path:'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'my-account',
        component: MyAccountComponent
      },
      {
        path:'regis',
        component: RegisComponent
      }
    ])
  ]
})
export class ShoppingModule { }
