import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TitanDeveloperPortalPOC';

  panelOpenState = false;

  sidenavPages = [
    { title: 'First Page', routerLink: 'page1', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
    { title: 'Second Page', routerLink: 'page2', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
    { title: 'Third Page', routerLink: 'page3', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
  ];
}
