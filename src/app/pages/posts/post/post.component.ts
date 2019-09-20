import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Output() idEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.idEvent.emit(this.post.id);
  }
}
