import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonFormReactiveComponent } from './person-form-reactive/person-form-reactive.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotoListComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'person-form', component: PersonFormComponent },
  { path: 'person-form-reactive', component: PersonFormReactiveComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
