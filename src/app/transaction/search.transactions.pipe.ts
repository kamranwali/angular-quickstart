import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from './transaction.model';

@Pipe({
  name: 'searchTransactions',
  pure: true
})
export class SearchTransactionPipe implements PipeTransform {

  transform(trans: Array<Transaction>, searchQuery: string) {
    console.log('pipe transformed called');
    if (!searchQuery) {
      return trans;
    }

    return trans.filter(t => {
      return t.tags.find(tag => tag.indexOf(searchQuery) > -1);
    });
  }
}
