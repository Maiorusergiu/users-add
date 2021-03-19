import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { timestamp } from 'rxjs/operators';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  user: User;
  constructor(private service: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  activate(id: number) {
    this.user = this.users.find(user => user.id === id)
    console.log(this.user);
    this.service.activate(this.user).subscribe(user => {
      this.user = user;
    });
  }

  deActivate() {
    this.service.deActivate();
  }

  delete(id: number) {
    // pe interfata
    this.users = this.users.filter(x => x.id !== id);

    // pe server
    this.service.deleteUser(id).subscribe(() => {
      this.users;
    });
  }
}
