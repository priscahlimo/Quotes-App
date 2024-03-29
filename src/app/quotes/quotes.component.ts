import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Martin Luther King Jr.", 'Priscah Limo', '"Our lives begin to end the day we become silent about things that matter And If you concentrate on what you do not have."', 0,0 ,new Date(2021,1,5)),
    new Quotes("Oprah winfrey", 'Priscah Limo', '"Be thankful for what you have; you will end up having more. If you concentrate on what you do not have, you will never, ever have enough"',0, 0 , new Date(2020,9,23)),
    new Quotes("Maya Angelou", 'Priscah Limo', '“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',0,0, new Date(2017,4,20)),
  ];
  preNum!: number;
  lastNum!: number;
  counter!: number;

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedOn = new Date(quote.postedOn)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].likes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
