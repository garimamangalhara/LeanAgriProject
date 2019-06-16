import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public postData: any;
  public comments: any;
  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPostDetails();
  }
  getPostDetails() {
    let url = " https://jsonplaceholder.typicode.com/posts/" + this.route.snapshot.params['id']
    this.service.getPostsList(url).subscribe(response => {
      this.postData = response;
    })
    this.getComments();
  }
  getComments() {
    let url = " https://jsonplaceholder.typicode.com/posts/" + this.route.snapshot.params['id'] + "/comments"
    this.service.getPostsList(url).subscribe(response => {
      this.comments = response;
    })
  }
}
