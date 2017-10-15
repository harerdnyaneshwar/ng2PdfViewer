/*******************************************************************************************
Created by:Anuradha urgunde
Created on:06/09/2017 and 07/09/2017
modified by:
modified on:
************************************************************************************************/

import { Routes, RouterModule } from '@angular/router';
import { SubComponent } from './sub/sub.component';
// import { HomePageModule } from './home/homepage.module';

const appRoutes: Routes = [
    { path: '', component: SubComponent, pathMatch: 'full' },
    { path: 'sub', component: SubComponent },
    // { path: 'homepage', loadChildren: 'app/home/homepage.module#HomePageModule' },
    // { path: '**', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);