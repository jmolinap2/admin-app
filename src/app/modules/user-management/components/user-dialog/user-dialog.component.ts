import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  form: FormGroup;
  departamentos: any[] = [];
  cargos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User | null,
    private departmentService: DepartmentService,
    private roleService: RoleService
  ) {
    this.form = this.fb.group({
      id: [data?.id ?? null],
      usuario: [data?.usuario ?? '', Validators.required],
      primerNombre: [data?.primerNombre ?? '', Validators.required],
      segundoNombre: [data?.segundoNombre ?? ''],
      primerApellido: [data?.primerApellido ?? '', Validators.required],
      segundoApellido: [data?.segundoApellido ?? ''],
      idDepartamento: [data?.idDepartamento ?? null, Validators.required],
      idCargo: [data?.idCargo ?? null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(d => this.departamentos = d);
    this.roleService.getAll().subscribe(c => this.cargos = c);
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
