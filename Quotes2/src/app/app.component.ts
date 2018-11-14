import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heart Broken ? How are you feeling?';
  slogan = 'Share with others what you are going through or how you made it Through . Don\'t be depressed.';
  constructor() {
  }
}
