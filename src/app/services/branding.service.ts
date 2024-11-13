import { Injectable } from '@angular/core';
import { Tenant } from '../models/config.model';

@Injectable()
export class BrandingService {
    public applyBrandingCustomizationFromTenantConfiguration(
        tenant: Tenant
    ): void {

        console.log('tenant', tenant);
        const setDocumentStyleProperty = (
            property: string,
            value: string | null
        ) => {
            document.documentElement.style.setProperty(property, value);
        };

        // Primary colors
        setDocumentStyleProperty(
            '--primary-color-100',
            tenant.Layout.PrimaryColor100
        );

        setDocumentStyleProperty(
            '--primary-color-200',
            tenant.Layout.PrimaryColor200
        );

        setDocumentStyleProperty(
            '--primary-color-300',
            tenant.Layout.PrimaryColor300
        );

        setDocumentStyleProperty(
            '--primary-color-400',
            tenant.Layout.PrimaryColor400
        );

        setDocumentStyleProperty(
            '--primary-color-500',
            tenant.Layout.PrimaryColor500
        );

        setDocumentStyleProperty(
            '--primary-color-600',
            tenant.Layout.PrimaryColor600
        );

        setDocumentStyleProperty(
            '--primary-color-700',
            tenant.Layout.PrimaryColor700
        );

        // Secondary colors
        setDocumentStyleProperty(
            '--secondary-color-100',
            tenant.Layout.SecondaryColor100
        );

        setDocumentStyleProperty(
            '--secondary-color-200',
            tenant.Layout.SecondaryColor200
        );

        setDocumentStyleProperty(
            '--secondary-color-300',
            tenant.Layout.SecondaryColor300
        );

        setDocumentStyleProperty(
            '--secondary-color-400',
            tenant.Layout.SecondaryColor400
        );

        setDocumentStyleProperty(
            '--secondary-color-500',
            tenant.Layout.SecondaryColor500
        );

        setDocumentStyleProperty(
            '--secondary-color-600',
            tenant.Layout.SecondaryColor600
        );

        setDocumentStyleProperty(
            '--secondary-color-700',
            tenant.Layout.SecondaryColor700
        );

        // Fonts
        setDocumentStyleProperty(
            '--base-font-family',
            tenant.Layout.BaseFont
        );

        setDocumentStyleProperty(
            '--heading-font-family',
            tenant.Layout.HeadingFont
        );
    }
}
