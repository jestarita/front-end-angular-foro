import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-users-components',
  templateUrl: './users-components.component.html',
  styleUrls: ['./users-components.component.css'],
  providers: [UserService]
})
export class UsersComponentsComponent implements OnInit {

  public users : Array<User>;
  public url:string;
  public status:string;
  public page_title:string;
  constructor(
    private _userService:UserService
  ) {
    this.url =environment.url;
    this.page_title = 'compañeros';
   }

  ngOnInit(): void {
    this.getusers();
  }

  getusers(){
    this._userService.getusers().subscribe(
      response =>{
        if(response.usuarios){
          this.status = 'Success';
          this.users = response.usuarios;
        }else{
          this.status = 'error';
        }
      },
      error =>{
        this.status = 'error';
        console.log(<any>error)
      }
    )
  }
}
