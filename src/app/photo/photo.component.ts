import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: Photo;

  isLoading: Boolean = false;

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPhoto(params['id']);
    });
  }

  private getPhoto(id: number) {
    this.isLoading = true;

    this.photoService.getPhoto(id)
      .subscribe(photo => {
        this.photo = photo;
      }, (error) => {
        console.error(error);
      }, () => {
        this.isLoading = false;
      });
  }
}
