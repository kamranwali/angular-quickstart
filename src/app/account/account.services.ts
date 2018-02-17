import {Injectable, Optional} from '@angular/core';
import {Account} from './account.model';
import {LoggerService} from '../util/logger.service';

@Injectable()
export class AccountService {

  private _nextId = 3;
  private _accountLimit = 3;

  private _accounts: Array<Account> = [
    {
      id: 1,
      title: 'Account title 1',
      description: 'Account 1 description',
      balance: 501.2
    },
    {
      id: 2,
      title: 'Account title 2',
      description: 'Account 2 description',
      balance: 1024.2
    }
  ];

  constructor(@Optional() private _logger: LoggerService) {}

  public getAll(): Promise<Array<Account>> {
    return Promise.resolve(this._accounts);
  }

  public create(newAccount: Account) {
    return new Promise((resolve, reject) => {
      if (this._accounts.length >= this._accountLimit) {
        reject('Maximum account limit reached.');
        return;
      }
      newAccount.id = this._nextId++;
      if (this._logger) {
        this._logger.log(`Account created: ${newAccount.title}`);
      }
      this._accounts.push(newAccount);
      resolve(newAccount);
    });

  }

  public remove(index: number) {
    return new Promise((resolve) => {
      if (this._logger) {
        this._logger.log(`Account deleted ${this._accounts[index].title}`);
      }
      this._accounts.splice(index, 1);
      resolve('tt');
    });
  }

  public getById(accountId: number): Promise<Account> {
    return new Promise((resolve, reject) => {
      let foundAcc = this._accounts.find(acc => acc.id === accountId);

      if (!foundAcc) {
        reject('No account with this id');
      } else {
        resolve(foundAcc);
      }
    });
  }
}
