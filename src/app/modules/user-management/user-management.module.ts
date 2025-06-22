import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
