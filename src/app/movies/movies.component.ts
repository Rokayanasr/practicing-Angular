import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  constructor(_MoviesServices: MoviesService) {
    /**subscribe is taking an object  it takes three things
     *1- next : if there is a response what i do (callback) its similar to then
     it is the must to return data i have to subscribe
     **/
    _MoviesServices.getAllMovies().subscribe({
      next: (response) => (this.allMovies = response.results),
      //error occurs when there is a problem in the api or the connection
      error: (err)=> this.errMessage = err,
      complete:()=>console.log('complete')
    });
  }
  errMessage:string =''
  imgPrefix:string = 'https://image.tmdb.org/t/p/w200'
  ngOnInit() {}
}
