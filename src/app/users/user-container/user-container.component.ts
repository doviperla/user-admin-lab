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
  users:User[];
  
  constructor() { }

  ngOnInit() {
    console.log("the User Container Init!!!");
    this.users = this.initUsers();
  }

  onClickUser(user:User)
  {
    this.currentUser = user;
  }

  initUsers(): User[] {
    let users:User[] = new Array<User>();
    users[0] = new User();
    users[0].id = 0;
    users[0].userName = "john_d";
    users[0].email = "john.doe@gmail.com";
    users[0].userInfo = new UserInfo();

    users[0].userInfo.firstName = "john";
    users[0].userInfo.lastName = "doe";
    users[0].userInfo.jobTitle = "Developer";
    users[0].userInfo.avatar = "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png";
    users[0].userInfo.phoneNumber = "01-234-343434";

    users[1] = new User();
    users[1].id = 1;
    users[1].userName = "dovi perla";
    users[1].email = "john.doe@gmail.com";
    users[1].userInfo = new UserInfo();

    users[1].userInfo.firstName = "dovi";
    users[1].userInfo.lastName = "perla";
    users[1].userInfo.jobTitle = "Lacture";
    users[1].userInfo.avatar = "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png";
    users[1].userInfo.phoneNumber = "01-234-343434";

    return users;
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
