import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'SampleAngularApp';

  startDate:string;

  @ViewChild('footer', {static:true})
  footerComponent:FooterComponent;

  onClickUpdate(){

    this.footerComponent.lastReference = new Date().toString();
    console.log(this.footerComponent.lastReference);
  }

  ngOnInit(): void {
    this.startDate = new Date().toString();
  }


}
