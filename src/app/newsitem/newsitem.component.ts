import { Component, OnInit, Input, SimpleChange, } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  articles = [];
  @Input() category: string;
  isDescriptionEmpty:boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('news items', this.category);
    this.apiService.getNews().subscribe((data) => {
      console.log('get news....api');
      this.articles = data['articles'];
      if(data['articles']['description'] == "" || data['articles']['description'] == null){
        this.isDescriptionEmpty = true;
      }
    })
  }

  ngOnChanges(change: SimpleChange) {
    console.log('on changes called')
    if (this.category == "" || this.category == null || this.category == undefined) {
      this.apiService.getNews().subscribe((data) => {
        console.log('get news',data);
        this.articles = data['articles'];
      })
    } else {
      this.apiService.getNewsByCategory(this.category).subscribe((data) => {
        console.log('news category: ', this.category);
        console.log(data);
        this.articles = data['articles'];
      })
    }
  }

}
