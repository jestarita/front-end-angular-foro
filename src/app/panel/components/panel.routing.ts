import {NgModule, Component} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import {UserGuard} from '../../../app/services/user.guard';
//componentes
import { MainComponent } from '../../panel/components/main/main.component';
import { AddComponent } from '../../panel/components/add/add.component';
import { EditComponent } from '../../panel/components/edit/edit.component';
import { ListComponent } from '../../panel/components/list/list.component';

const panel_routes:Routes =[
    {path:'panel' , component: MainComponent,
    canActivate:[UserGuard],
    children: [
        {path :'', component: ListComponent},
        {path: 'crear', component: AddComponent},
        {path: 'listado', component:ListComponent},
        {path: 'editar/:id', component:EditComponent}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(panel_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PanelRoutingModule{}