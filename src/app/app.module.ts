import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewslistComponent } from './newslist/newslist.component';
import { HeadersComponent } from './headers/headers.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { ApiService } from './api.service';
import { CustomPipe } from './custom.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    HeadersComponent,
    NewsitemComponent,
    CustomPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
