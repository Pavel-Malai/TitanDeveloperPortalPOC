export interface Config {
    TenantConfiguration?: any;
}

export interface Tenant {
    Code: string;
    Layout: Layout;
}

export interface Layout {
    PrimaryColor100: string;
    PrimaryColor200: string;
    PrimaryColor300: string;
    PrimaryColor400: string;
    PrimaryColor500: string;
    PrimaryColor600: string;
    PrimaryColor700: string;
    SecondaryColor100: string;
    SecondaryColor200: string;
    SecondaryColor300: string;
    SecondaryColor400: string;
    SecondaryColor500: string;
    SecondaryColor600: string;
    SecondaryColor700: string;
    BaseFont: string;
    HeadingFont: string;
}