import { Component, OnInit } from '@angular/core';

// Services
import { UserLoggedInService } from '../../services/user-logged-in.service';

// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private userLoggedInService: UserLoggedInService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.userLoggedInService.remove();

      this.router.navigate(['/']);
    }, 1000);
  }

}
