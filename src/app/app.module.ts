import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {PanelModule} from '../app/panel/components/panel.module';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
import { MomentModule } from 'angular2-moment';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MainComponent } from './panel/components/main/main.component';
import { AddComponent } from './panel/components/add/add.component';
import { EditComponent } from './panel/components/edit/edit.component';
import { ListComponent } from './panel/components/list/list.component';
import { TopicComponent } from './components/topic/topic.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponentsComponent } from './components/users-components/users-components.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SearchComponent } from './components/search/search.component';
//servicio
import {UserService} from '../app/services/user.service';
import {UserGuard} from '../app/services/user.guard';
import {notloginGuard} from '../app/services/notlogin.guard';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    TopicComponent,
    TopicDetailComponent,
    UsersComponentsComponent,
    UserDetailComponent,
    SearchComponent
   
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    PanelModule,
    MomentModule,
    NgxHighlightJsModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard,
    notloginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
