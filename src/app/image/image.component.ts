import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

declare var ColorThief: any;
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  imageSrc:any;
  colorThief: any;
  color:any;
  @Output() colorsArray = new EventEmitter<any>();

  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;;
  constructor(){
     this.colorThief = new ColorThief();
 }

  onImgLoad(){
    const imageElement = this.imageElement.nativeElement;
    this.color = this.getColor(imageElement)
    this.colorsArray.emit(this.color);
    console.log(this.color)
  }
  getColor(imageElement: HTMLImageElement) {
    return this.colorThief.getPalette(imageElement);
  }
  handleImageChange(event: Event){
    const eventTarget = event.target  as HTMLInputElement;
    if(eventTarget.files && eventTarget.files.length > 0){
      const file = eventTarget.files[0];
      this.displayImage(file)
    }

  }

  displayImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (event) => {
      this.imageSrc = (<FileReader>event.target).result;
    };

    reader.readAsDataURL(file);
  }
}
