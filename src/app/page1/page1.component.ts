import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageNumber = 'Page 1';

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    alert("Hello today data is: " +new Date());
  }
}
