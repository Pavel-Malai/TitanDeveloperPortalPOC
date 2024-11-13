import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { LayoutComponent } from './layout/layout.component';
import { SiteContentMockService } from './services/site-content-mock.service';

const defaultRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'test',
        component: PageContentComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: (siteContentMockService: SiteContentMockService) => {
        console.log('Initializing routing');
        let routes: Routes = [];

        let dynamicRoutes = siteContentMockService.getRoutes();
        console.log('Dynamic routes', dynamicRoutes);
        for (let route of dynamicRoutes) {
          defaultRoutes[0].children?.push({
            path: route,
            component: PageContentComponent
          });
        }

        return [
          ...routes,
          ...defaultRoutes
        ];
      },
      multi: true,
      deps: [SiteContentMockService]
    }
  ]
})

export class AppRoutingModule { }