import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User | null
  ) {
    this.form = this.fb.group({
      id: [data?.id ?? null],
      username: [data?.username ?? '', Validators.required],
      firstName: [data?.firstName ?? '', Validators.required],
      lastName: [data?.lastName ?? '', Validators.required],
      department: [data?.department ?? '', Validators.required],
      role: [data?.role ?? '', Validators.required],
      email: [data?.email ?? '', [Validators.required, Validators.email]]
    });
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
