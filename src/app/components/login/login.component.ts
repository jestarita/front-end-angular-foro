import { Component,   OnInit } from '@angular/core';
import {  User} from '../../models/user';
import {  UserService} from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public identity;
  public token;
  constructor(
    private _userService: UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.page_title = 'Identificarse';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {}

  iniciar_sesion(formulario) {
    this._userService.signup(this.user).subscribe(
      response => {

        if (response.user && response.user._id) {
          //guardar el objeto del usuario
          this.identity = response.user;
          localStorage.setItem('identity',JSON.stringify(this.identity));
          

          //get token
          this._userService.signup(this.user, true).subscribe(
            response => {

              if (response.token) {
                this.token = response.token;
                localStorage.setItem('token', this.token);
                this.status = 'Success';
                this._router.navigate(['/inicio']);
              } else {
                this.status = 'error';

              }
            },
            error => {
              console.log( < any > error)
              this.status = 'error';
            }
          )

        } else {
          this.status = 'error';

        }
      },
      error => {
        console.log( < any > error)
        this.status = 'error';
      }
    )

  }

}
