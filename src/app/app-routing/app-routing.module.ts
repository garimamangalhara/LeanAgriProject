import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';
import { CreatePostComponent } from '../posts/create-post/create-post.component';
import { UpdatePostComponent } from '../posts/update-post/update-post.component';
const routes: Routes = [
  {
    path: 'postDetails/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'createPost',
    component: CreatePostComponent
  },
  {
    path: 'updatePost/:id',
    component: UpdatePostComponent
  },
  {
    path: '',
    component: PostsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
