import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookComponent} from "./book/book.component";
import {CreateBookComponent} from "./book/create-book/create-book.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";
import {ViewBookComponent} from "./book/view-book/view-book.component";


const routes: Routes = [
  {
    path: '', component:BookComponent
  },
  {
    path: 'create', component:CreateBookComponent
  },
  {
    path: 'edit/:id', component:EditBookComponent
  },
  {
    path: 'view/:id', component:ViewBookComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
