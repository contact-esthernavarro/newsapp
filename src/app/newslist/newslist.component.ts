import { Component, OnInit } from '@angular/core';
import { NewsitemComponent } from '../newsitem/newsitem.component';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})

export class NewslistComponent implements OnInit {

  category;

  constructor() { }

  ngOnInit(): void{
  }

  onSelect(select){
    this.category = select;
    console.log(this.category);
  }

}
