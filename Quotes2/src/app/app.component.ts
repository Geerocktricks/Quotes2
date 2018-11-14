import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes app';
  slogan = 'Where do broken hearts go?';

  quotes = [
    new Quote(1, 'Heartbreaks are good for your career'),
    new Quote (2 , 'Its not about what you\'ve been through , its about what you became'),
  ];
  constructor() {
  }
}
