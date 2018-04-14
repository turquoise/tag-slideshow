import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import {trigger, transition, style, animate, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

  ]
})
export class AppComponent implements OnInit {


  slide1 = [
    '../assets/Img/edward-cisneros-411006-unsplash.jpg',
    '../assets/Img/nainoa-shizuru-80385-unsplash.jpg',
    '../assets/Img/noiseporn-247586-unsplash.jpg'
  ];
  slide2 = [
  ];
  slide3 = [
  ];

  ngOnInit() {

  }





}
