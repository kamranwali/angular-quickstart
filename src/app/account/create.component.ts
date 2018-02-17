import {Component, ViewChild} from '@angular/core';
import {Account} from './account.model';
import {AccountService} from './account.services';
import {AccountForm} from './account_form.component';

@Component({
  templateUrl: 'app/account/create.component.html'
})

export class CreateComponent {
  private _accountService: AccountService;
  private createAccError: string = '';
  @ViewChild(AccountForm) form: AccountForm;

  constructor(accountService: AccountService) {
    this._accountService = accountService;
  }

  private removeAccount(index: number) {
    this._accountService.remove(index)
    .then(account => {
      console.log(account);
    })
  }

  private createAcc(newAccount: Account) {
    this._accountService.create(newAccount)
    .then(account => {
      this.createAccError = '';
      this.form.resetForm();
    })
    .catch(err => this.createAccError = err);
  }
}
