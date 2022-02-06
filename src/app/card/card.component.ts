import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
    @Input() quote!:Quotes;
    @Output() isComplete = new EventEmitter<boolean>();
  
    quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
    incrementLikes(){
        let liked = this.quote.likes;
        liked++;
        this.quote.likes = liked;
      }
    
      incrementDislikes(){
        let disliked = this.quote.dislikes;
        disliked++;
        this.quote.dislikes = disliked;
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}
