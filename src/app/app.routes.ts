import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'accounts', component: AccountComponent}
];

export const routing = RouterModule.forRoot(routes);

