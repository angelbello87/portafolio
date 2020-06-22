import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-slideimages',
  templateUrl: './slideimages.component.html',
  styleUrls: ['./slideimages.component.css']
})
export class SlideimagesComponent implements OnInit {

  @Input() title:string;
  @Input() comment:string;
  @Input() imageRoute:string;
  @Input() imageCount:number;

  imageURL: Array<string>;

  constructor() { 
    this.imageURL = new Array<string>();
  }

  ngOnInit(): void {
    for( let i = 0; i < this.imageCount; i++)
    {
      let p = i + 1;
      let url: string = "../"+this.imageRoute + "photo" + p + ".png";
      this.imageURL.push(url); 
    }
    
    
    console.log(this.imageURL);
  }

}
