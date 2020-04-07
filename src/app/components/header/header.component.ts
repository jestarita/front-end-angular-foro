import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit,DoCheck {
  public identity;
  public token;
  public url:string;
  public buscar:string;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.url = environment.url;
  }
 

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
  }

  buscar_texto(form){
    this._router.navigate(['/buscar', this.buscar]);
  }

}
