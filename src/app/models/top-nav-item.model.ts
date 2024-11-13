import { TopNavItemLink } from "./top-nav-item-link.model";

export interface TopNavItem {
    id: string;
    text: string;
    url: string;
    links: TopNavItemLink[];
}