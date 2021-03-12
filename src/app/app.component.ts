import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'port-folio';

  constructor(private viewport: ViewportScroller) {

  }

  ngOnInit() {
    AOS.init();

  }

  scroll(elementId: string) {
    this.viewport.scrollToAnchor(elementId)
  }
}
