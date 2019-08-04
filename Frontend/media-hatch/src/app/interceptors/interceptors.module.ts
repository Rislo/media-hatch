import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SERVER_URL, RETRIES, ApiInterceptor, API_EXTENSION_URL } from './api.interceptor';


export class InterceptorsProviders {
    public serverUrl: string;
    public apiExtensionUrl?: string;
    public retries: number;
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        }
    ]
})
export class InterceptorsModule {
    static forRoot(interceptorsProviders: InterceptorsProviders): ModuleWithProviders {
        return {
            ngModule: InterceptorsModule,

            providers: [
                {provide: SERVER_URL, useValue: interceptorsProviders.serverUrl},
                {provide: API_EXTENSION_URL, useValue: interceptorsProviders.apiExtensionUrl},
                {provide: RETRIES, useValue: interceptorsProviders.retries}
            ]
        };
    }
}
