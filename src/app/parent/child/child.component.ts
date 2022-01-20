import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childtoy = 'Bat';
  @Output() childfunction: EventEmitter<string>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  senddata(){
    let fname = "chirag";
    this.childfunction.emit(fname)
  }
}
