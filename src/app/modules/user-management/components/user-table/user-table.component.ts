import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'department', 'role', 'email', 'actions'];
}
