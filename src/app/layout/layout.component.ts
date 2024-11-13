import { Component } from '@angular/core';
import { SiteContentMockService } from '../services/site-content-mock.service';
import { SideNavItem } from '../models/sidenav-item.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  sidenavItems: SideNavItem[] = [];
  constructor(private siteContentMockService: SiteContentMockService) { 
    this.sidenavItems = this.siteContentMockService.siteContent.sidenavItems || [];
  }
  // sidenavPages = [
  //   { title: 'First Page', routerLink: 'page1', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
  //   { title: 'Second Page', routerLink: 'page2', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
  //   { title: 'Third Page', routerLink: 'page3', subitems: [{ title: "Subitem 1" }, { title: "Subitem 2" }] },
  // ];

}
