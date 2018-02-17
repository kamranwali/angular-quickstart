import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls: ['app/account/account_list.component.css']
})


export class AccountsList {

  @Input('accounts') _accounts: Array<Account>;
  @Output('delete') delete = new EventEmitter<Number>();
  @Output() details = new EventEmitter<Account>();

  private _remove(index: number) {
    this.delete.emit(index);
  }

  private _showDetails(account: Account) {
    this.details.emit(account);
  }

}

