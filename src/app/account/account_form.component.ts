import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'account-form',
  templateUrl: 'app/account/account_form.component.html',
  styleUrls: ['app/account/account_form.component.css']
})

export class AccountForm {

  @Input() error: string;
  @Output('created') created = new EventEmitter<Account>();
  @ViewChild('form') form: ElementRef;

  private createAcc(titleEl: any, descEl: any, balEl: any) {
    let newAccount: Account = new Account(0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);
  }

  public resetForm() {
    this.form.nativeElement.reset();
  }

}
