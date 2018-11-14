import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes app';
  slogan = 'Where do broken hearts go?';

  quotes: string[];
  constructor() {
    this.quotes = ['Heartbreaks are good for your career' , 'Its not about what you\'ve been through , its about what you became'];
  }
}
