import { lastValueFrom, Observable, of } from "rxjs";
import { SiteContent } from "../models/site-content.model";
import { Injectable } from "@angular/core";
import { SideNavItem } from "../models/sidenav-item.model";
import { PageSection } from "../models/page-section.model";


@Injectable({
    providedIn: 'root',
})
export class SiteContentMockService {
    siteContent: SiteContent = {};

    constructor(
    ) { }

    init(): Promise<void> {
        // this.getData().subscribe((content: Content) => {
        //     this.siteContent = content;
        //     console.log('Initialized');
        // });

        // return this.getData().toPromise().then((content: Content) => {
        //     this.siteContent = content;
        //     console.log('Initialized');
        // }    

        return lastValueFrom(this.getData()).then((content: SiteContent) => {
            this.siteContent = content;
            console.log('Initialized', content);
        });
    }

    getData(): Observable<SiteContent> {
        setTimeout(() => { }, 3000)

        const content = {
            pages: [
                {
                    id: '1',
                    title: 'Page 1',
                    url: 'page-1',
                    section: [
                        {
                            id: '1',
                            title: 'Section 1',
                            description: 'Section 1 description'
                        },
                        {
                            id: '2',
                            title: 'Section 2',
                            description: 'Section 2 description'
                        }
                    ]
                },
                {
                    id: '2',
                    title: 'Page 2',
                    url: 'page-2',
                    section: [
                        {
                            id: '1',
                            title: 'Section 1',
                            description: 'Section 1 description'
                        },
                        {
                            id: '2',
                            title: 'Section 2',
                            description: 'Section 2 description'
                        }
                    ]
                }
            ],

            sidenavItems: [

                {
                    id: '1',
                    title: 'Page 1',
                    url: 'page-1',
                    sections: [
                        {
                            id: '1',
                            title: 'Section 1',
                            description: 'Section 1 description',
                            sections: [
                                {
                                    id: '1',
                                    title: 'Sub Section 1',
                                    description: 'Sub Section 1 description'
                                } as PageSection,
                                {
                                    id: '2',
                                    title: 'Sub Section 2',
                                    description: 'Sub Section 2 description'
                                } as PageSection
                            ]
                        } as PageSection,
                        {
                            id: '2',
                            title: 'Section 2',
                            description: 'Section 2 description'
                        } as PageSection
                    ]
                } as SideNavItem,
                {
                    id: '2',
                    title: 'Page 2',
                    url: 'page-2',
                    sections: [
                        {
                            id: '1',
                            title: 'Section 1',
                            description: 'Section 1 description'
                        },
                        {
                            id: '2',
                            title: 'Section 2',
                            description: 'Section 2 description'
                        }
                    ]
                } as SideNavItem,
                {
                    id: '3',
                    title: 'Page 3',
                    url: 'page-3',
                } as SideNavItem
            ]

        } as SiteContent

        return of(content);
    }

    getRoutes(): string[] {
        const routes = this.siteContent.sidenavItems?.map(item => item.url) || [];
        // let routes: string[] = [];

        // this.siteContent.sidenavItems?.forEach(sideNav => {
        //     routes.push(sideNav.url);

        //     sideNav.sections?.forEach(section => {
        //         routes.push(section.url);
        //     });
        // });

        return routes;
    }
}