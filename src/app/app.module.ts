import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
