import { Component } from '@angular/core';
import { SiteContentMockService } from '../services/site-content-mock.service';
import { SideNavItem } from '../models/sidenav-item.model';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SiteContent } from '../models/site-content.model';
import { ThemeService } from '../services/theming.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isDarkMode: boolean = false;

  //Used for sidenav implementation using mat tree
  treeControl = new NestedTreeControl<SideNavNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SideNavNode>();
  sidenavTreeData: SideNavNode[] = [];

  //Used for sidenav implementation using mat expansion panel
  sidenavItems: SideNavItem[] = [];

  constructor(private siteContentMockService: SiteContentMockService, private themeService: ThemeService) {

    this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });

    this.sidenavItems = this.siteContentMockService.siteContentData.sidenavItems || [];

    this.dataSource.data = this.mapApiDataToSideNavModel(this.siteContentMockService.siteContentData);
    // this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: SideNavNode) => !!node.children && node.children.length > 0;

  private mapApiDataToSideNavModel(sitecontent: SiteContent): SideNavNode[] {
    sitecontent.sidenavItems?.forEach(sideNavItem => {

      this.sidenavTreeData.push({
        name: sideNavItem.title,
        url: sideNavItem.url,
        children: sideNavItem.sections?.map(subSection => {
          return {
            name: subSection.title,
            id: subSection.id,
            url: sideNavItem.url,
          }
        })
      })
    });

    return this.sidenavTreeData;
  }
}


interface SideNavNode {
  id?: string;
  name: string;
  url?: string;
  children?: SideNavNode[];
}

const TREE_DATA: SideNavNode[] = [
  {
    name: 'Page1',
    children: [{ name: 'Section 1', url: "page-1" }, { name: 'Section 2', url: "page-2" }, { name: 'Section 3', url: "page-1" }],
  },
  {
    name: 'Page2',
    children: [
      {
        name: 'Section 1',
        url: "page-1",
        children: [{ name: 'Section 1', url: "page-1" }, { name: 'Section 2', url: "page-2" }, { name: 'Section 3', url: "page-1" }]
      },
      { name: 'Section 2', url: "page-2" },
      { name: 'Section 3', url: "page-1" }],
  },
];