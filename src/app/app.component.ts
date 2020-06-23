import { Component } from '@angular/core';
import { ScrollEvent} from 'ngx-scroll-event';

@Component({
  selector: 'app-portafolio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  topscroll:boolean;

  constructor ()
  {
    this.topscroll = true;
  }

  Scroll(event:ScrollEvent):void
  {    
    if(event.isReachingTop)
    {
      this.topscroll = true;
    }
    else
    {
      this.topscroll = false;
    }    
  }
}

