import { UserInfo } from './../../models/user-info.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  users: User[]

  @Input()
  currentUser: User;

  @Output()
  UserSelected: EventEmitter<User>;

  constructor() {
    this.UserSelected = new EventEmitter<User>();
  }

  ngOnInit() {
  }

  onClickUser(user: User) {
    this.UserSelected.emit(user);
  }

}
