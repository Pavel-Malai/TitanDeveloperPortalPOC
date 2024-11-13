import { PageContent } from "./page-content.model";
import { SideNavItem } from "./sidenav-item.model";

export interface SiteContent {
    pages?: PageContent[];
    sidenavItems?: SideNavItem[];
    topNavItems?: PageContent[];
}