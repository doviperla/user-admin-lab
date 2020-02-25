import { UserInfo } from './../../models/user-info.model';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  currentUser: User;
  
  constructor() { }

  ngOnInit() {
    console.log("the User Container Init!!!");
    this.currentUser = this.initUser(new User());
  }

  initUser(user: User): User {
    user.id = 0;
    user.userName = "john_d";
    user.email = "john.doe@gmail.com";
    user.userInfo = new UserInfo();

    user.userInfo.firstName = "john";
    user.userInfo.lastName = "doe";
    user.userInfo.jobTitle = "Developer";
    user.userInfo.avatar = "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png";
    user.userInfo.phoneNumber = "01-234-343434";
    return user;
  }

  saveUserData(emailValue:string, nameValue:string)
  {
    //this.currentUser.email = emailValue;
    //this.currentUser.userName = nameValue;
  }

  // this.users =  [
  //   new UserModel(0, 'johndoe', 'johndoe@gmail.com',
  //     new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
  //   ),
  //   new UserModel(1, 'janedoe', 'janedoe@gmail.com',
  //     new UserInfo('Jane', 'Doe', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
  //   ),
  //   new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
  //     new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
  //   ),
  //   new UserModel(3, 'janesmith', 'janesmith@gmail.com',
  //     new UserInfo('Jane', 'DBA', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
  //   ),
  // ]

}
