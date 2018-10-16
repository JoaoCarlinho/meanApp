import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service'
import { HidepanelService } from '../services/hidepanel.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  subscribing: boolean;

  constructor(private news: NewsletterService, private data: HidepanelService) { }

  ngOnInit() {
    this.news.subscribeVisibility.subscribe(subscribeVisibility => this.subscribing = subscribeVisibility)
    function  init(){
      var time=500;
      var colors=	[
        'blue','red','green','indigo','orange','yellow','violet','cyan',
                'aqua','brown','black','pink','firebrick','fuchsia','gold','silver'
              ];
      for(let i=1; i<=16; i++){
          let num=Math.floor(Math.random()*colors.length);
          let element = document.getElementById('line'+i);
          //console.log(element.hasAttribute('color'));
          element.setAttribute('color', colors[num - 1]);
      }
      setTimeout(function(){init()},time);
    }
  
    if(window.addEventListener){
      window.addEventListener('load',init,false);
    }  
    
  }

  subscribe(){

    this.subscribing = !this.subscribing;
    this.news.ShowSubscribeForm(this.subscribing);
    this.data.ShowHidePanel(false);
  }

}
