import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies = this.store.collection('movies').valueChanges()as Observable<Movie[]>;
  //movies: Observable<Movie[]>;
  // movies:any[];
  
  
  constructor(private store: AngularFirestore) { }
  
  ngOnInit(): void {
    console.log(this.movies)
  }
}
