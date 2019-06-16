import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  public update: any
  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router) {
    this.update = {
      "userId": "",
      "title": "",
      "body": ""
    }
  }

  ngOnInit() {
  }

  updatePost() {
    let url = "https://jsonplaceholder.typicode.com/posts/" + this.route.snapshot.params['id'];
    let template = JSON.parse(JSON.stringify(this.update))
    for (let prop in template) {
      if (!template[prop]) {
        delete template[prop]
      }
    }
    if (Object.keys(template).length == 0) {
      window.alert("Please enter atleast one value")
    }
    else {
      this.service.updatePost(url, template).subscribe(response => {
        console.log("Updated data", response)
        window.alert("Updating the post Successful!")
        this.update = {
          "userId": "",
          "title": "",
          "body": ""
        }
      },
        error => {
          window.alert("Some error occurred while updating the post!")
        })
    }

  }
}
