import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users: User[] = [];
  private apiUrl:string = 'https://dummyjson.com';

  constructor(private http:HttpClient) {
    this.http = http;
    // this.loadUsers();
    this.loadUsersList();
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  public loadUsers() {
    this.getUser().subscribe((user: User) => {
      this.users.push(user);
      console.log(this.users);
    });
  }

  public loadUsersList() {
    this.getUsers().subscribe((usersInput: any) => {
      this.users = usersInput.users as User[];
      // this.users = (usersInput as any as { users: User[] }).users;
      // let numero: number = (usersInput as any as { total: number }).total;
      // console.log(this.users);
      // console.log(numero);

    //    for (const user of usersInput['users']) {
    //      this.users.push(user);
    //    }
     });
  }

  public getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
