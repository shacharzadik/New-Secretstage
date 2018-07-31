import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  @Input()  gender :string;
  @Output() addordelete :EventEmitter<string> = new EventEmitter<string>();
  isClicked :boolean;

  constructor() {
    this.isClicked = false;
   }

  ngOnInit() {
  }

  

  onClick() {
    this.isClicked = !this.isClicked;
    this.addordelete.emit(this.gender);
  }

}
