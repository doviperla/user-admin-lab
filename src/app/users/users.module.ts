import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  declarations: [
    UserContainerComponent,
    UsersListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserContainerComponent
  ]
})
export class UsersModule { }
