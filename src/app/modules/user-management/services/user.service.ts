import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  department: string;
  role: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users$ = new BehaviorSubject<User[]>([
    { id: 1, username: 'ppicapiedra', firstName: 'Pedro', lastName: 'Picapiedra', department: 'Tecnologías de la Información', role: 'Administrador', email: 'ppicapiedra@mail.com' },
    { id: 2, username: 'pmarmrol', firstName: 'Pablo', lastName: 'Marmol', department: 'Tecnologías de la Información', role: 'Líder Frontend', email: 'pmarmrol@mail.com' },
    { id: 3, username: 'jalimana', firstName: 'Juanito', lastName: 'Alimaña', department: 'Tecnologías de la Información', role: 'Líder Backend', email: 'jalimana@mail.com' },
    { id: 4, username: 'wwhite', firstName: 'Walter', lastName: 'White', department: 'Tecnologías de la Información', role: 'Desarrollador Frontend', email: 'wwhite@mail.com' },
    { id: 5, username: 'jpinkman', firstName: 'Jesse', lastName: 'Pinkman', department: 'Tecnologías de la Información', role: 'Desarrollador Frontend', email: 'jpinkman@mail.com' },
    { id: 6, username: 'sgoodman', firstName: 'Saul', lastName: 'Goodman', department: 'Legal', role: 'Abogado', email: 'sgoodman@mail.com' },
    { id: 7, username: 'mehrmantraut', firstName: 'Mike', lastName: 'Ehrmantraut', department: 'Seguridad', role: 'Guardia', email: 'mehrmantraut@mail.com' },
    { id: 8, username: 'kwexler', firstName: 'Kimberly', lastName: 'Wexler', department: 'Legal', role: 'Abogado', email: 'kwexler@mail.com' },
    { id: 9, username: 'gfring', firstName: 'Gustavo', lastName: 'Fring', department: 'Eventos y Buffets', role: 'Pollero', email: 'gfring@mail.com' }
  ]);

  getUsers() {
    return this.users$.asObservable();
  }

  addUser(user: User) {
    const id = Math.max(...this.users$.value.map(u => u.id)) + 1;
    this.users$.next([...this.users$.value, { ...user, id }]);
  }

  updateUser(user: User) {
    const updated = this.users$.value.map(u => u.id === user.id ? user : u);
    this.users$.next(updated);
  }

  deleteUser(id: number) {
    this.users$.next(this.users$.value.filter(u => u.id !== id));
  }
}
