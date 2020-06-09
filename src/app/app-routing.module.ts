
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewslistComponent } from './newslist/newslist.component';


const routes: Routes = [
  {path:'news', component: NewslistComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
