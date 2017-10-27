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

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoComponent,
    HeaderComponent,
    HomeComponent,
    PersonFormComponent,
    PersonFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
