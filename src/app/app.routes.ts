import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'sidebar', component: SidebarComponent},
];
//rotas