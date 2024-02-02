import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UsersService {
  //anything i put here i can use it in any other components
  //i put api here so every comp can get the api

  friends:User[] = [
    {name:'ahmed',age:545,salary:3434},
    {name:'roka',age:34,salary:434},
    {name:'tota',age:23,salary:5656767},
    {name:'boda',age:43,salary:34983948},
    {name:'moka',age:76,salary:3438},
  ]
  welcome(){
    console.log('welcome');
  }
  constructor(private _HttpClient:HttpClient) {
    console.log('service constructor');
  }
}
