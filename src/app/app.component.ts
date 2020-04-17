import { Component } from '@angular/core';

// Services
import { UserLoggedInService } from './services/user-logged-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  constructor(
    public userLoggedInService: UserLoggedInService
  ) { }

  ngOnInit(): void {
  }
}
