import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Color Extractinator';
  colorArray:any;
  setColorArray(event:Event){
     this.colorArray= event;
  }
}
