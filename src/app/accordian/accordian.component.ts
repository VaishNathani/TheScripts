import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  pageTitle = "Example of an Accordian and collapsible button";
  constructor() { }

  ngOnInit() {
  }

}
