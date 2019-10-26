import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["pinterest.com, https://www.mylibrary.org/home"];
  constructor() { }

  ngOnInit() {
  }

}
