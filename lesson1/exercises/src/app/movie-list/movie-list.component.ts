import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Say Anything', 'Boondock Saints', 'Suicide Kings', 'Empire Records'];

   constructor() { }

   ngOnInit() {
   }

}
