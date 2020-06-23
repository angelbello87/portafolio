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
  pic = "";
  imageindex:number;

  constructor() { 
    this.imageURL = new Array<string>();
    this.imageindex = 0;
  }

  ngOnInit(): void {
    for( let i = 0; i < this.imageCount; i++)
    {
      let p = i + 1;
      let url: string = this.imageRoute + "photo" + p + ".png";
      this.imageURL.push(url); 
    }
    
    this.pic = this.imageURL[this.imageindex];        
  }

  public ChangeNextPic():void
  {
    this.imageindex += 1;
    if(this.imageindex >= this.imageURL.length)
    {
      this.pic = this.imageURL[0];
      this.imageindex = 0;
    }
    else
    {      
      this.pic = this.imageURL[this.imageindex];
    }
  }

  public ChangePrevPic():void
  {
    this.imageindex -= 1; 
    if(this.imageindex < 0)
    {
      this.pic = this.imageURL[this.imageURL.length-1];
      this.imageindex = this.imageURL.length - 1;
    }
    else
    {      
      this.pic = this.imageURL[this.imageindex];
    }
  }

  public ChangePic(picurl:string):void
  {
    this.pic = picurl;
    this.imageindex = this.imageURL.findIndex( i => i == picurl)
  }
}
