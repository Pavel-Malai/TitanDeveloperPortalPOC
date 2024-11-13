import { PageSection } from "./page-section.model";

export interface SideNavItem {
    id: string;
    title: string;
    url: string;

    sections?: PageSection[];

}