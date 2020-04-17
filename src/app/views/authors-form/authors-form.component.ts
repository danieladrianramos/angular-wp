import { Component, OnInit } from '@angular/core';

// Form
import { FormGroup, FormBuilder } from '@angular/forms';

// Service && Interface
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/Author';

// Router && Accessing the params
import { Router, ActivatedRoute } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
  styleUrls: ['./authors-form.component.css']
})
export class AuthorsFormComponent implements OnInit {
  authorForm: FormGroup;
  error: String;

  constructor(
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Empty form
    this.buildForm("", "", "");
  }

  buildForm(_id, name, bio): void {
    this.authorForm = this.formBuilder.group({ _id, name, bio });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authorsService.getById(params[`id`]).subscribe(res => {
        // Complete the form
        this.buildForm(res._id, res.name, res.bio);
      });
    });
  }

  onSubmit(data) {
    if (data._id) {
      this.authorsService.update(data._id, data.name, data.bio).subscribe((res) => { 
        // Redict to list
        this.router.navigate(['/authors/list']);
      }, (err: HttpErrorResponse) => {
        this.error = "Check the fields!";
      });
    } else {
      this.authorsService.add(data.name, data.bio).subscribe((res) => { 
        // Redict to list
        this.router.navigate(['/authors/list']);
      }, (err: HttpErrorResponse) => {
        this.error = "Check the fields!";
      });
    }
  }
}
