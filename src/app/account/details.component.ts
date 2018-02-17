import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Account} from './account.model';
import {AccountService} from './account.services';
import {TransactionService} from '../transaction/transaction.services';
import {Transaction} from '../transaction/transaction.model';

@Component({
  templateUrl: 'app/account/details.component.html',
  styleUrls: ['app/account/details.component.css']
})

export class DetailsComponent implements OnInit, OnDestroy {

  private _account: Account;
  private _error: string =  '';
  private _paramSub: any;
  private _trans: Array<Transaction>;
  private _tagSearchQuery: string;
  private _nextId: number = 13;

  constructor(private _route: ActivatedRoute,
              private _accountSerice: AccountService,
              private _transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this._paramSub = this._route.params.subscribe(params => {
      let id: number = +params['id'];

      this._account = null;
      this._error = '';

      this._accountSerice.getById(id)
      .then(account => this._account = account)
      .catch(err => this._error = err);

      this._transactionService.getByAccountId(id)
      .then(trans => this._trans = trans);
    });
  }

  ngOnDestroy(): void {
    this._paramSub.unsubscribe();
  }

  private isObject(obj: any) {
    return typeof obj === 'object';
  }

  private searchByTag(tagEl: any) {
    this._tagSearchQuery = tagEl.value;
  }

  private makeTransaction(): Transaction {
    let newTrans: Transaction = {
      id: '' + this._nextId,
      value: 33.3,
      description: 'Test Description',
      date: new Date(),
      tags: ['something', 'bills'],
      accountId: 1
    };

    // updating nextid
    this._nextId++;
    return newTrans;
  }

  private addInArray() {
    this._trans.push(this.makeTransaction());
  }

  private addInCopyOfArray() {
    this._trans = this._trans.slice();
    this._trans.push(this.makeTransaction());
  }
}
