import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgIfContext } from '@angular/common';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



const url: string = "http://localhost:4200";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  activate(username) {
   return this.http.post<User>(`${url}/users/authenticate`, username).pipe(map(user => {
     localStorage.setItem('user', JSON.stringify(user));
     this.userSubject.next(user);
     window.alert(`User ${user.username} activated!`);
     return user;
     
   }))
  }

  deActivate() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    window.alert("User Deactivated!");
  }

  getUsers() {
    return this.http.get<User[]>(`/users`);
  }

  createUser(user: User) {
    return this.http.post(`/users/register`, user);
  }
  deleteUser(id: number){
    return this.http.delete(`/users/${id}`);
  }
  userId(id: number){
    return this.http.get<User>(`/users/${id}`);
  }
  updateUser(id, user) {
    return this.http.put(`/users/${id}`, user);
  }
}
