import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  power = 10;

  items = ['juan', 'nicolas', 'yo'];

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
