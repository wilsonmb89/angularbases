import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(
    // tslint:disable-next-line: variable-name
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.mensajes = this._dataService.getPosts();
    /* .subscribe( (res: any[]) => {
      this.mensajes = res;
     }); */
  }

  getPostEmit(event) {
    console.log('Click en:', event);
  }

}
