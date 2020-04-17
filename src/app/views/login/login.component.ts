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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: String;
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private userLoggedInService: UserLoggedInService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.usersService.login(data.username, data.password).subscribe((res) => { 
      // Save the user into the sessionStorage
      this.userLoggedInService.set(JSON.stringify(res.body));

      // Redict to home
      this.router.navigate(['/']);
    }, (err: HttpErrorResponse) => {
      this.error = "Check the fields!";
    });
  }
}
