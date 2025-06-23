import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';
import { RoleService } from '../../services/role.service';
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

  departamentos: { id: number; nombre: string }[] = [];
  cargos: { id: number; nombre: string }[] = [];

  selectedDepartamentoId: number | null = null;
  selectedCargoId: number | null = null;

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private roleService: RoleService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.departmentService.getAll().subscribe(res => this.departamentos = res);
    this.roleService.getAll().subscribe(res => this.cargos = res);
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u =>
      (!this.selectedDepartamentoId || u.idDepartamento === this.selectedDepartamentoId) &&
      (!this.selectedCargoId || u.idCargo === this.selectedCargoId)
    );
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px',
      data: user ?? null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      const action = result.id
        ? this.userService.updateUser(result.id, result)
        : this.userService.createUser(result);

      action.subscribe(() => this.loadUsers());
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
