import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'app/transaction/create.component.html'
})
export class CreateComponent implements OnInit, OnDestroy {

  private _accountId: number;
  private _paramSub: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._paramSub = this._route.params.subscribe(params => {
      this._accountId = +params['account'];
    });
  }

  ngOnDestroy(): void {
    this._paramSub.unsubscribe();
  }
}
