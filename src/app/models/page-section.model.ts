export interface PageSection {
    id: string;
    title: string;
    description: string;

    sections?: PageSection[];
}