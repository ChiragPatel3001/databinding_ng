import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public firstname = "Chirag";
  public myId = "testId";

  onClick()
  {
  alert("Kya Bolta bhidu?");
}
public name="";
}
