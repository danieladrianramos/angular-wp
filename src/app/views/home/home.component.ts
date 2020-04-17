import { Component, OnInit } from '@angular/core';

// Service & Interface
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/Post';

// Router
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  error: String;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.postsService.getAll().subscribe((res) => { 
      this.posts = res;
    }, (err: HttpErrorResponse) => {
      this.error = "No data";
    });
  }
}
