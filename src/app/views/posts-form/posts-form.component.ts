import { Component, OnInit } from '@angular/core';

// Form
import { FormGroup, FormBuilder } from '@angular/forms';

// Service & Interface
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/Author';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/Post';

// Router && Accessing the params
import { Router, ActivatedRoute } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
  authors: Author[];
  postForm: FormGroup;
  error: String;

  constructor(
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService,
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Empty form
    this.buildForm("", "", "", "", "");
  }

  buildForm(_id, title, description, date, authorId): void {
    this.postForm = this.formBuilder.group({ _id, title, description, date, authorId });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params[`id`]) {
        this.postsService.getById(params[`id`]).subscribe(res => {
          // Complete the form
          this.buildForm(res._id, res.title, res.description, res.date, res.author._id);
        });
      }
    });

    // Populate list
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorsService.getAll().subscribe((res) => { 
      this.authors = res;
    });
  }

  onSubmit(data) {
    if (data._id) {
      this.postsService.update(data._id, data.title, data.description, data.authorId, data.date).subscribe((res) => { 
        // Redict to list
        this.router.navigate(['/posts/list']);
      }, (err: HttpErrorResponse) => {
        this.error = "Check the fields!";
      });
    } else {
      this.postsService.add(data.title, data.description, data.authorId, data.date).subscribe((res) => { 
        // Redict to list
        this.router.navigate(['/posts/list']);
      }, (err: HttpErrorResponse) => {
        this.error = "Check the fields!";
      });
    }
  }
}
