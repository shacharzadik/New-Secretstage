import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-gender',
  templateUrl: './music-gender.component.html',
  styleUrls: ['./music-gender.component.css']
})
export class MusicGenderComponent implements OnInit {

  @Input()  gender :string;
  isClicked :boolean;

  constructor() {
    this.isClicked = false;
   }

  ngOnInit() {
  }

  

  onClick() {
    alert("isClicked value changed!!")
    this.isClicked = !this.isClicked;
  }

}
