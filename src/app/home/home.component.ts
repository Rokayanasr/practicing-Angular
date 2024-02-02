import { User } from '../user';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UsersService]

})
export class HomeComponent {
  // when i put the this in the parameter of the constructor
  // i take an object from the class without calling the constructor of the class
  // so i can change anything without affecting the others , this is called dependancy injection
  constructor(_UserServices:UsersService) {
    // let myServices = new UsersService();
    this.homeUsers = _UserServices.friends;
    // myServices.welcome()
  }
  homeUsers: User[] = [];
  mainColor: string = '#09c';
  secondColor: string = 'grey';
  userName: string = 'ahmed ali';
  userAge: number = 34;
  imgSrc: string = './../../assets/images/1.jpeg';
  imgWidth: number = 300;
  lightTheme: string = 'background-color: #ccc ; color:black; font-size:20px';
  darkTheme: string = 'background-color: black ; color:white; font-size:30px';
  changeToggleTheme() {
    // this.toggleTheme = !this.toggleTheme
    if (this.toggleTheme == true) {
      this.toggleTheme = false;
    } else {
      this.toggleTheme = true;
    }
  }
  toggleTheme: boolean = false;
  welcome() {
    return this.lightTheme;
  }

  user: User = {
    name: 'ahmed',
    age: 34,
    salary: 45543,
  };
  changeName() {
    this.userName = `x+${Math.random()}`;
  }
}
