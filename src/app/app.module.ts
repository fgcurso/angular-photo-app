import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { HeaderComponent } from './header/header.component';
import { PhotoService } from './photo.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonFormReactiveComponent } from './person-form-reactive/person-form-reactive.component';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoComponent,
    HeaderComponent,
    HomeComponent,
    PersonFormComponent,
    PersonFormReactiveComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
