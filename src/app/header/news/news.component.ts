import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
fetchNews;
fData;
  constructor(private news:NewsService) { }

  ngOnInit() {
  		this.news.News()
        .subscribe(ser => {
          console.log(ser);
          this.fData = ser;
          this.fetchNews = this.fData.articles
          
      });
  }

}
