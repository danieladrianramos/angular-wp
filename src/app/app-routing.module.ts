import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsFormComponent } from './views/authors-form/authors-form.component';
import { AuthorsListComponent } from './views/authors-list/authors-list.component';

import { PostsFormComponent } from './views/posts-form/posts-form.component';
import { PostsListComponent } from './views/posts-list/posts-list.component';

import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'authors/list',
    component: AuthorsListComponent
  },
  {
    path: 'authors/form/:id',
    component: AuthorsFormComponent
  },
  {
    path: 'authors/form',
    component: AuthorsFormComponent
  },
  {
    path: 'posts/list',
    component: PostsListComponent
  },
  {
    path: 'posts/form/:id',
    component: PostsFormComponent
  },
  {
    path: 'posts/form',
    component: PostsFormComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
