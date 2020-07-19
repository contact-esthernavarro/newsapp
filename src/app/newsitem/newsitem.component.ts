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
  isDescriptionEmpty: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const list = 'articles';
    const desc = 'description'
    this.apiService.getNews()
      .pipe()
      .subscribe((data) => {
        this.articles = data[list];
        console.log(this.articles)
        if (data[list]['description'] === "" || data[list][desc] == null) {
          this.isDescriptionEmpty = true;
        }
      })
  }


  ngOnChanges(change: SimpleChange) {
    const list = 'articles';
    if (this.category == "" || this.category == null || this.category == undefined) {
      this.apiService.getNews().subscribe((data) => {
        this.articles = data[list];
      })
    } else {
      this.apiService.getNewsByCategory(this.category).subscribe((data) => {
        console.log('news category: ', this.category);
        this.articles = data[list];
      });
    }
  }

}
