import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterLink,FilterPipe,FormsModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  searchValue: string = '';
  constructor(public userService: UserService) { }

  // ngOnInit() {
  //   this.userService.loadUsers();
  // }

  public addUser() {
    this.userService.loadUsers();
  }
}
