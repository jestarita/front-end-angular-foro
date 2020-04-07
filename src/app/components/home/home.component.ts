import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  public page_title:string;
  public identity;
  public token;
  public url:string;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.page_title = 'Bienvenido al foro de desarrolladores'
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.url = environment.url;
  }

  ngOnInit(): void {
  }

}
