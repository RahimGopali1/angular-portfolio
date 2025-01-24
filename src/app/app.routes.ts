import { Routes } from '@angular/router';
import path from 'node:path';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    { path: 'home', component: HomePageComponent },
    { path: 'resume', component: ResumeComponent },
];
