import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], nombre: string): User[] {
    if (!nombre) {
      return users;
    }

    const lowerSearchValue = nombre.toLowerCase();
    return users.filter(user => user.firstName.toLowerCase().includes(lowerSearchValue));
  }

  

}
