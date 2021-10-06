import { Routes } from '@angular/router';

export const FullRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../../pages/dashboard.module').then(m => m.DashboardModule)
    }
];
