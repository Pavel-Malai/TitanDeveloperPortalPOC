import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private doc: Document,
  ) {
    console.log(window.location.hostname);

  }
  ngOnInit(): void {
    this.doc.body.classList.add('esendex');
    // this.doc.body.classList.add('text-anywhere');

  }
  title = 'TitanDeveloperPortalPOC';

  panelOpenState = false;

  sidenavPages = [
    { title: 'First Page', routerLink: 'page1', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
    { title: 'Second Page', routerLink: 'page2', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
    { title: 'Third Page', routerLink: 'page3', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
  ];
}
