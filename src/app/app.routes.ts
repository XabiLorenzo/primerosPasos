import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
    {path: 'main', component: UsersListComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];
