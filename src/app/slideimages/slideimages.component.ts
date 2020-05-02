import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideimages',
  templateUrl: './slideimages.component.html',
  styleUrls: ['./slideimages.component.css']
})
export class SlideimagesComponent implements OnInit {

  @Input() title:string;
  @Input() comment:string;
  constructor() { }

  ngOnInit(): void {
  }

}
