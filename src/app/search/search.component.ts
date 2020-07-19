import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Output() selected = new EventEmitter<string>();
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  searchForm: FormGroup;
  

  constructor(private apiService: ApiService, private formBuilder: FormBuilder ) { }

  ngOnInit(){
    this.searchForm = this.formBuilder.group({
      categoryControl: ['']
    });

    this.searchForm.statusChanges.subscribe((status) => { console.log(status) ; });
  }


  onSubmit(select: string){
    this.selected.emit(select);

    this.apiService.getNewsByCategory(select).subscribe((data) => {
      console.log(data);
      this.searchForm.reset();
    });
  }
}
