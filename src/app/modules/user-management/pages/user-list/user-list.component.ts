import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  departments: string[] = [];
  roles: string[] = [];
  selectedDepartment: string = '';
  selectedRole: string = '';

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.departments = [...new Set(users.map(u => u.department))];
      this.roles = [...new Set(users.map(u => u.role))];
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u =>
      (!this.selectedDepartment || u.department === this.selectedDepartment) &&
      (!this.selectedRole || u.role === this.selectedRole)
    );
  }

  openDialog(user?: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user ?? null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      result.id ? this.userService.updateUser(result) : this.userService.addUser(result);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
