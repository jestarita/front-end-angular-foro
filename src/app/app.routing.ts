import {ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicComponent } from './components/topic/topic.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponentsComponent } from './components/users-components/users-components.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SearchComponent } from './components/search/search.component';
//servicios
import {UserService} from '../app/services/user.service';
import {UserGuard} from '../app/services/user.guard';
import {notloginGuard} from '../app/services/notlogin.guard';
const appRoutes:Routes =[

    {path: '', component:HomeComponent},
    {path: 'ajustes', component:UserEditComponent, canActivate:[UserGuard]},
    {path: 'inicio', component:HomeComponent},
    {path: 'temas', component:TopicComponent},
    {path: 'temas/:page', component:TopicComponent},
    {path: 'tema/:number', component:TopicDetailComponent},
    {path: 'profile/:number', component:UserDetailComponent},
    {path: 'usuarios', component:UsersComponentsComponent},
    {path: 'buscar/:search', component:SearchComponent},
    {path: 'registro', component:RegisterComponent, canActivate:[notloginGuard]},
    {path: 'login', component:LoginComponent, canActivate:[notloginGuard]},
    {path: '**', component:HomeComponent}
]

export const appRoutingProviders:any[] =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
