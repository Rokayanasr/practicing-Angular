import { User } from '../user';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css',
  //when i put the service in the provider of every component,
  // then every component have to change in the data alone without
  // affecting the others and deleted injectable root from all the application
  providers:[UsersService]

})
export class MobileComponent {
  homeUsers: User[] = [];
  constructor(_UserService:UsersService) {
    /** when i make new object of a class then i call its constructor
     * so if any change happened in service constructor it will cause error in all the classes
     * that it dependent to it because of the dependency injection
     */
    // let myServices = new UsersService();
    this.homeUsers = _UserService.friends;
  }
}
