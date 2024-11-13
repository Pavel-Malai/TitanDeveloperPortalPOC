import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config, Tenant } from "../models/config.model";
import { lastValueFrom } from "rxjs";
import { BrandingService } from "./branding.service";

@Injectable({
    providedIn: 'root',
})
export class ConfigLoaderService {
    private httpClient: HttpClient;
    private config: Config = {};

    constructor(handler: HttpBackend, private brandingService: BrandingService) {
        this.httpClient = new HttpClient(handler);
    }

    get configuration() {
        return this.config;
    }

    getCurrentTenant(): Tenant {
        const currentHostName = window.location.hostname;
        const currentTenant = this.configuration.TenantConfiguration[currentHostName] as Tenant;

        return currentTenant;
    }

    public init(): Promise<void> {
        return lastValueFrom(this.httpClient.get('./assets/config.json')).then((config: Config) => {
            this.config = config;
            this.brandingService.applyBrandingCustomizationFromTenantConfiguration(this.getCurrentTenant());
        });
    }
}