import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

}