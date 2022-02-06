import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Martin Luther King Jr.", 'Priscah Limo', '"Our lives begin to end the day we become silent about things that matter."',5,5 ,new Date(2023,8,4)),
     new Quotes("Oprah winfrey", 'Priscah Limo', '"Be thankful for what you have; you will end up having more. If you concentrate on what you do not have, you will never, ever have enough"',5,5 , new Date(2023,8,4)),
    new Quotes("Maya Angelou", 'Priscah Limo', '“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',5,5 , new Date(2023,8,4)),
  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedOn = new Date(quote.postedOn)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
