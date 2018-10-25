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
      var time=100;
      var colors=	['6BEAF0','#4AB8F6','#4AB8F6','#4AB8F6','#1275AD','#6BEAF0','#6BEAF0','#6BEAF0','#75C2D6','#75C2D6','#75C2D6','#3AC0E4','#6BEAF0','#75C2D6','silver','silver'];
      for(let i=1; i<=65; i++){
          let colorNum=Math.floor(Math.random()*(colors.length - 1));
          let element = document.getElementById('line'+i);
          //console.log(element.hasAttribute('color'));
          element.setAttribute('color', colors[colorNum]);
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
