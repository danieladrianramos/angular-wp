import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Add components
import { AuthorsListComponent } from './views/authors-list/authors-list.component';
import { PostsListComponent } from './views/posts-list/posts-list.component';
import { AuthorsFormComponent } from './views/authors-form/authors-form.component';
import { PostsFormComponent } from './views/posts-form/posts-form.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';

// Add HTTP client for services (added it also in imports)
import { HttpClientModule } from '@angular/common/http';

// Add forms (added it also in imports)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Add service (added it also in providers)
import { UsersService } from './services/users.service';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorsFormComponent,
    PostsListComponent,
    PostsFormComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
