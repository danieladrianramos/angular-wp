import { Component, OnInit } from '@angular/core';

// Service & Interface
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/Author';

// Router
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[];
  error: String;

  constructor(
    private authorsService: AuthorsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.authorsService.getAll().subscribe((res) => { 
      this.authors = res;
    }, (err: HttpErrorResponse) => {
      this.error = "No data";
    });
  }

  onDelete(id: String): void {
    this.authorsService.delete(id).subscribe((res) => { 
      this.getList();
    }, (err: HttpErrorResponse) => {
      this.error = "No data";
    });
  }
}
