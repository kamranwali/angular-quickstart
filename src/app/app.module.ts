import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { AccountsList } from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { AccountService } from './account/account.services';
import { LoggerService } from './util/logger.service';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import {CreateComponent} from './account/create.component';
import {ListComponent} from './account/list.component';
import {DetailsComponent} from './account/details.component';
import {TransactionService} from './transaction/transaction.services';
import {CreateComponent as TransactionCreateComponent} from './transaction/create.component';
import {TransactionComponent} from './transaction/transaction.component';
import {SearchTransactionPipe} from './transaction/search.transactions.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'accounts',
    component: AccountComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'create', component: CreateComponent},
      {path: ':id', component: DetailsComponent}
    ]
  },
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      {path: 'create', component: TransactionCreateComponent}
    ]
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, AccountsList, AccountForm,
                  HomeComponent, AccountComponent,
                  CreateComponent, ListComponent, DetailsComponent,
                  TransactionCreateComponent, TransactionComponent,
                  SearchTransactionPipe],
  providers:    [ AccountService, LoggerService, TransactionService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
