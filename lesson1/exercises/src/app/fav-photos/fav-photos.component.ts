import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here Are Some Favorite Photos';
  image1 = 'https://video-images.vice.com/articles/5d6d1bb2597b790008bc458a/lede/1567431776409-29978_122746394417349_2624601_n.jpeg?crop=1xw:0.8254xh;0xw,0.0522xh&resize=700:*';
  image2 = 'https://i.ytimg.com/vi/8DbfUvcD6tc/maxresdefault.jpg';
  image3 = 'https://thumbs.gfycat.com/VictoriousElectricFoxhound-mobile.jpg'

  constructor() { }

  ngOnInit() {
  }

}