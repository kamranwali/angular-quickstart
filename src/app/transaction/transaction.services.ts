import {Injectable} from '@angular/core';
import {Transaction} from './transaction.model';
import {Account} from '../account/account.model';

@Injectable()
export class TransactionService {

  private _transactions: Array<Transaction> = [
    { id: '1', value: 50.45, description: 'something', date: new Date(2016, 6, 5, 4, 4, 4), tags: ['somethig'], accountId: 1 },
    { id: '2', value: 120.23, description: 'something else', date: new Date(2017, 0, 15, 7, 8, 9), tags: ['somethig'], accountId: 1 },
    { id: '3', value: -45.345, description: 'bill paid', date: new Date(2017, 11, 23, 9, 5, 4), tags: ['bills', 'Electricity'], accountId: 1 }
  ];

  public getByAccountId(accountId: number): Promise<Array<Transaction>> {
    return  new Promise((resolve, reject) => {
      resolve(this._transactions.filter(tran => tran.accountId === accountId));
    });
  }
}
