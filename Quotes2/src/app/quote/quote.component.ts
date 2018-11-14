import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Heartbreaks are good for your career'),
    new Quote (2 , 'Its not about what you\'ve been through , its about what you became'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
