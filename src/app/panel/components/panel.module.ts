//modulos para cargars

import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PanelRoutingModule } from '../../panel/components/panel.routing';
import { MomentModule } from 'angular2-moment';

//componentes

import { MainComponent } from '../../panel/components/main/main.component';
import { AddComponent } from '../../panel/components/add/add.component';
import { EditComponent } from '../../panel/components/edit/edit.component';
import { ListComponent } from '../../panel/components/list/list.component';

//servicios
import {UserService} from '../../../app/services/user.service';
import {UserGuard} from '../../../app/services/user.guard';
//ngmodule
@NgModule({
    declarations:[
        MainComponent,
        AddComponent,
        EditComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PanelRoutingModule,
        MomentModule
    ],
    exports:[
        MainComponent,
        AddComponent,
        EditComponent,
        ListComponent
    ], 
    providers:[
        UserService,
        UserGuard
    ]
})

export class PanelModule {}