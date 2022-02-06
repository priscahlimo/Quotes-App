import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Mahatma Ghandi", 'Priscah Limo', 'Find an online version and watch merlin find his son',5,5 ,new Date(2023,8,4)),
     new Quotes("Oprah winfrey", 'Priscah Limo', 'Find an online version and watch merlin find his son',5,5 , new Date(2023,8,4)),
    new Quotes("Maya Angelou", 'Priscah Limo', 'Find an online version and watch merlin find his son',5,5 , new Date(2023,8,4)),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
