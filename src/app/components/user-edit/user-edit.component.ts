import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {environment} from '../../../environments/environment';

import { from } from 'rxjs';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public page_title:string;
  public user:User;
  public token;
  public status:string;
  public identity;
  public afuConfig;
  public url:string;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.page_title = 'Ajustes de Usuario'
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.user = this.identity;
    this.url = environment.url;
    this.afuConfig = {
      multiple:false,
      formatsAllowed: ".jpg,.png, jpeg, .gif",
      maxSize: "50",
      uploadAPI:  {
        url:this.url+'upload-avatar',
        headers: {     
       "Authorization" : this.token
        }
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube tu foto...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !'
      }
    }
  }

  ngOnInit(): void {
  }

  Actualizar_usuario(form){
    this._userService.update(this.user).subscribe(
      response =>{

       if(!response.user){
        this.status = 'error';
       }
       else{
         this.status = 'Success';
         this.user = response.user;
         localStorage.setItem('identity', JSON.stringify(this.user));

       }
      },
      error =>{
        this.status = 'error';
        console.log(<any>error)
      }
    )

  }

  CargarImagen(data){
    let data_obj = JSON.parse(data.response);
    this.user.image = data_obj.user.image;
  }

}
