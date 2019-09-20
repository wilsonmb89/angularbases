import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule
  ],
  providers: []
})
export class PostsModule { }
