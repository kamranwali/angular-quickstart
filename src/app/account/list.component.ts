import { Component } from '@angular/core';
import {Account} from './account.model';
import {AccountService} from './account.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'app/account/list.component.html'
})

export class ListComponent {
  private _accounts: Array<Account> = [];
  private _accountService: AccountService;

  constructor(accountSerice: AccountService,
              private _router: Router,
              private _route: ActivatedRoute
  ) {
    this._accountService = accountSerice;
    let promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  private _showAccountDetails(account: Account) {
    this._router.navigate(['/accounts', account.id]);
    this._router.navigate(['..', account.id], {relativeTo: this._route});
  }
}
