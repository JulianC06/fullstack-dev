import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  providers: [ImageService]
})
export class ImageGalleryComponent implements OnInit {
  @ViewChild('content')
  content!: TemplateRef<any>;

  query: string = '';
  category: string = '';




  selectedImage: any;
  page: number = 1;

  constructor(private modalService: NgbModal, private imageService: ImageService) {
  }

  images: any[] = new Array();

  ngOnInit(): void {

    this.imageService.getImages('first', '').subscribe(
      imgs => this.images = imgs.hits
    );

  }

  search(): void {
    this.loadImages(this.category, this.query);
  }

  openModal(image: any): void {
    this.selectedImage = image;
    this.modalService.open(this.content, { centered: true });
  }

  loadImages(category: string, query: string): void {

    this.imageService.getImages(query, category).subscribe(
      imgs => this.images = imgs.hits
    );
  }


}
