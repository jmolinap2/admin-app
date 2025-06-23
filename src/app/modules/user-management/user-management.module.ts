import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UserManagementComponent } from './user-management.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserTableComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class UserManagementModule {}
