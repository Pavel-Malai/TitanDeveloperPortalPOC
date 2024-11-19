import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageContentComponent } from './page-content/page-content.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteContentMockService } from './services/site-content-mock.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ConfigLoaderService } from './services/config-loader.service';
import { BrandingService } from './services/branding.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MatTableModule } from '@angular/material/table';

export function initializeSiteContent(siteContentService: SiteContentMockService) {
  return (): Promise<any> => {
    return siteContentService.init();
  }
}

export function initializeConfig(configLoaderService: ConfigLoaderService) {
  return (): Promise<any> => {
    return configLoaderService.init();
  }
}

export function initializeApp(configLoaderService: ConfigLoaderService, siteContentService: SiteContentMockService) {
  return (): Promise<any> => {
    return configLoaderService.init().then(() => {
      siteContentService.init();
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    LayoutComponent,
    SafeHtmlPipe,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [
    SiteContentMockService,
    BrandingService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ConfigLoaderService, SiteContentMockService, BrandingService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
