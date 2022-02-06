import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()quotes!:Quotes;
  newQuote = new Quotes("","","",0,0,new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  
    submitQuote(){
  this.addQuote.emit(this.newQuote);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
