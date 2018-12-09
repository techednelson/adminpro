import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'DashBoard' }},
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress' }},
            { path: 'graphic1', component: Graphic1Component, data: { title: 'Graphics' }},
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Theme Settings' }},
            { path: 'promises', component: PromisesComponent, data: { title: 'Promises' }},
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
