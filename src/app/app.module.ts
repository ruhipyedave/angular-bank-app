import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateAccComponent } from './accounts/create-acc/create-acc.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    CreateAccComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      {
        path: 'dashboard',
        component: DashboardComponentComponent,
        children: [
          { path: 'accounts', component: AccountsComponent, pathMatch: 'full' },
          { path: 'accounts/create', component: CreateAccComponent, pathMatch: 'full' },
          { path: 'transactions', component: TransactionsComponent, pathMatch: 'full' },
          { path: 'customers/create', component: RegistrationComponentComponent, pathMatch: 'full' },
          { path: 'customers', component: CustomersComponent, pathMatch: 'full' },
        ]
      },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
