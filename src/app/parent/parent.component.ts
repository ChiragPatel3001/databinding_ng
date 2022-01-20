import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parenttoy='ball';

  constructor() { }

  ngOnInit(): void {
  }

  name = "";

  parentfunction(fname:string){
    
    this.name = fname;
  }

}
