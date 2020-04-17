import { Component, OnInit } from '@angular/core';

// Form
import { FormBuilder } from '@angular/forms';

// Services
import { UsersService } from '../../services/users.service';
import { UserLoggedInService } from '../../services/user-logged-in.service';

// Router
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: String;
  registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private userLoggedInService: UserLoggedInService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      password: '',
      email: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.usersService.register(data.username, data.password, data.email).subscribe((res) => {
      if (!res.body._id) {
        this.error = "Check the fields!";
      } else {
        // Save the user into the sessionStorage
        this.userLoggedInService.set(JSON.stringify(res.body));

        // Redict to home
        this.router.navigate(['/']);
      }
    }, (err: HttpErrorResponse) => {
      this.error = "Check the fields!";
    });
  }
}

