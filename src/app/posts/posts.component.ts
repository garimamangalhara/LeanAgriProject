import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postList: any = []
  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts"
    this.service.getPostsList(url).subscribe(response => {
      this.postList = response;
      console.log(this.postList)
    })
  }
  navigateToDetails(id) {
    this.router.navigate(['postDetails', id], { relativeTo: this.route }, )
  }
  createPost() {
    this.router.navigate(['createPost'])
  }
  updatePost(id){
    this.router.navigate(['updatePost', id], { relativeTo: this.route }, )
  }
}
