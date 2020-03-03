import { User } from './../../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input()
  currentUser: User;

  @Output()
  userSelected: EventEmitter<any>;

  constructor() {
    this.userSelected = new EventEmitter<any>();
   }

  ngOnInit() {
  }

  saveUserData(email:string, name:string)
  {
    this.userSelected.emit({emailObj:  email, nameObj : name})
  }

}
