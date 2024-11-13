import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageContent } from '../models/page-content.model';
import { SiteContentMockService } from '../services/site-content-mock.service';
import { ConfigLoaderService } from '../services/config-loader.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent {
  public pageContent: PageContent | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private siteContentMockService: SiteContentMockService,
    private configLoaderService: ConfigLoaderService) {
  }

  ngOnInit() {
    const pageUrl = this.getPageUrl(this.router.url);
    this.siteContentMockService.getPageContent(pageUrl).subscribe((content: PageContent | undefined) => {
      this.pageContent = content;
    })

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  private jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  private getPageUrl(routeUrl: string): string {
    if (!routeUrl) return routeUrl;

    let url = routeUrl;
    if (routeUrl.charAt(0) === '/') {
      url = routeUrl.slice(1);
    }

    if (url.indexOf('#') > -1) {
      url = url.split('#')[0];
    }

    return url;
  }
}
