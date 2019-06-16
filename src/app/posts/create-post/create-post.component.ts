import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public create: any
  constructor(private service: ServicesService) {
    this.create = {
      "userId": "",
      "title": "",
      "body": ""
    }
  }

  ngOnInit() {

  }

  createPost() {
    let url = " https://jsonplaceholder.typicode.com/posts"
    if (!this.create.userId && !this.create.title && !this.create.body) {
      window.alert("Please enter atleast one value")
    }
    else {
      this.service.createPost(url, this.create).subscribe(response => {
        console.log(response)
        window.alert("Post Created!")
        this.create = {
          "userId": "",
          "title": "",
          "body": ""
        }
      }, error => {
        window.alert("Some error occurred while creating post!")
      })
    }
  }
}
