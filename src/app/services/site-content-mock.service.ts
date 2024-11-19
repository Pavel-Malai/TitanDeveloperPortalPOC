import { delay, lastValueFrom, Observable, of } from "rxjs";
import { SiteContent } from "../models/site-content.model";
import { Injectable } from "@angular/core";
import { SideNavItem } from "../models/sidenav-item.model";
import { PageSection } from "../models/page-section.model";
import { PageContent } from "../models/page-content.model";
import { ConfigLoaderService } from "./config-loader.service";

@Injectable({
    providedIn: 'root',
})
export class SiteContentMockService {
    requestDelay = 0;
    privatesiteContent!: SiteContent;

    constructor(private configLoaderService: ConfigLoaderService) { }

    init(): Promise<void> {
        const tenantCode = this.configLoaderService.getCurrentTenant().Code;
        return lastValueFrom(this.getAllSiteData(tenantCode).pipe(delay(this.requestDelay))).then((content: SiteContent) => {
            this.mockSiteContent = content;
        });
    }

    get siteContentData(): SiteContent {
        return this.mockSiteContent;
    }

    getAllSiteData(tenant?: string): Observable<SiteContent> {
        return of(this.mockSiteContent).pipe(delay(this.requestDelay));
    }

    getPageContent(url: string): Observable<PageContent | undefined> {
        return of(this.mockSiteContent.pages?.find(page => page.url === url)).pipe(delay(this.requestDelay));
    }

    getRoutes(): string[] {
        const routes = this.mockSiteContent.sidenavItems?.map(item => item.url) || [];
        return routes;
    }

    private mockSiteContent = {
        pages: [
            {
                id: 'page1',
                title: 'Page 1',
                url: 'page-1',
                description: 'Page 1 description',
                sections: [
                    {
                        id: 'section1',
                        title: 'Section 1',
                        content: page1Section1
                    } as PageSection,
                    {
                        id: 'section2',
                        title: 'Section 2',
                        content: page1Section2
                    },
                    {
                        id: 'section3',
                        title: 'Section 3',
                        content: page1Section3
                    }
                ]
            } as PageContent,
            {
                id: 'page2',
                title: 'Page 2',
                url: 'page-2',
                description: 'Page 2 description',
                sections: [
                    {
                        id: 'section1',
                        title: 'Section 1',
                        content: page2Section1
                    },
                    {
                        id: 'section2',
                        title: 'Section 2',
                        content: page2Section2
                    }
                ]
            },
            {
                id: 'page-3',
                title: 'Page 3',
                url: 'page-3',
                description: 'Page 3 description',
                content: page3
            }
        ],

        sidenavItems: [
            {
                id: 'page1',
                title: 'Page 1',
                url: 'page-1',
                sections: [
                    {
                        id: 'section1',
                        title: 'Section 1',
                    } as PageSection,
                    {
                        id: 'section2',
                        title: 'Section 2',
                    } as PageSection,
                    {
                        id: 'section3',
                        title: 'Section 3',
                    } as PageSection
                ]
            } as SideNavItem,
            {
                id: 'page-2',
                title: 'Page 2',
                url: 'page-2',
                sections: [
                    {
                        id: 'section1',
                        title: 'Section 1',
                    } as PageSection,
                    {
                        id: 'section2',
                        title: 'Section 2',
                    } as PageSection,
                ]
            } as SideNavItem,
            {
                id: 'page-3',
                title: 'Page 3',
                url: 'page-3',
            } as SideNavItem
        ]
    } as SiteContent
}

const someBreaks = `<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>`;

const page1Section1 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><pre>
  <code>
    export model = new Model(&#123;
      a:1,
      b:function()&#123;&#125;
    &#125;)
  </code>
</pre><br/><br/><br/><br/>` + someBreaks;

const page1Section2 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>` + someBreaks;

const page1Section3 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>` + someBreaks;

const page2Section1 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>` + someBreaks;

const page2Section2 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br/><br/><br/><br/>` + someBreaks;

const page3 = `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br/><br/><br/><br/>`;


