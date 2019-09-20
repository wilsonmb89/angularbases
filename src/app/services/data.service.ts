import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    // tslint:disable-next-line: variable-name
    private _http: HttpClient
  ) { }

  getPosts() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap( console.log // forma corta
        /* (posts) => { forma larga
          console.log(posts);
        } */
      )
    );
  }
}
