import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users-module/models/User.model';
import { UserService } from '../users-module/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    
  }

}
