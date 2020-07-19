import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewslistComponent } from './newslist/newslist.component';
import { HeadersComponent } from './headers/headers.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { ApiService } from './api.service';
import { CustomPipe } from './custom.pipe';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    HeadersComponent,
    NewsitemComponent,
    CustomPipe,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
