import { PageSection } from "./page-section.model";

export interface PageContent {
    id: string;
    title: string;
    description?: string;
    url: string;
    content?: string;

    sections?: PageSection[];
}