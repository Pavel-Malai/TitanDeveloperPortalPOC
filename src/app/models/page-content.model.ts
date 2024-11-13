import { PageSection } from "./page-section.model";

export interface PageContent {
    id: string;
    title: string;
    url: string;

    section?: PageSection[];
}