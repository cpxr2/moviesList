import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoiveComponent } from './add-moive/add-moive.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'movie/*id', component: MovieDetailComponent},
  {path: 'add-movie', component: AddMoiveComponent},
  {path: '', component: MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
