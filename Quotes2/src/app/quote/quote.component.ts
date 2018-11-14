import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Heartbreaks are good for your career' , 'Geerockface' , new Date(2018, 3, 14)),
    new Quote (2 , 'Its not about what you\'ve been through , its about what you became' , 'Trevor Jayson' , new Date(2018, 3, 17)),
  ];

  completeGoal(isComplete, index) {
    if (isComplete) {
        this.quotes.splice(index, 1);
        }
        }

  toogleDetails(index) {
    // this.quotes[index].showAuthor = !this.quotes[index].showAuthor ;
    alert('I still love you baby');
  }
  constructor() { }

  ngOnInit() {
  }

}
