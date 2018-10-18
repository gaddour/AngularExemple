import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user.component';
import { EditUserComponent } from './components/users/edit-user.component';
import { AboutComponent } from './components/about/about.component';
import { GuardService } from './guard.service';
import { NotFoundComponent } from './components/not-found.component';

export const RoutesList: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent, canActivate: [GuardService],
        children: [
            { path: 'add', component: AddUserComponent },
            { path: 'edit/:id', component: EditUserComponent }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(RoutesList);



