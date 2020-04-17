import { Component, OnInit } from '@angular/core';

// Service & Interface
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/Post';

// Router
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
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

  onDelete(id: String): void {
    this.postsService.delete(id).subscribe((res) => { 
      this.getList();
    }, (err: HttpErrorResponse) => {
      this.error = "No data";
    });
  }
}
