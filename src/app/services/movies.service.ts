import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** httpclient inside it a metod that get the api */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

constructor(private _HttpClient:HttpClient) {
}
//this function is returning observable , observable is generic and observable is the response from the api
getAllMovies():Observable<any>{
  return this._HttpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=73b93766267af68c9b4f25fbce072d0e')
}

}
