import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './users/user-container/user-container.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
