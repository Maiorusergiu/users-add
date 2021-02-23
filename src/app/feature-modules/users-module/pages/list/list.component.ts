import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
 editUser: User;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }



  delete(id: number) {
    this.users = this.users.filter(x => x.id !== id);

    this.service.deleteUser(id).subscribe(() => {
      this.users;
    });
  }

}
