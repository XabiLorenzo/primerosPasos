import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  
    constructor(public route: ActivatedRoute, public userService: UserService) { 
        this.user = this.userService.getUserById(Number(this.route.snapshot.params['id']));

    }
  
    user: User| undefined;

    
}
