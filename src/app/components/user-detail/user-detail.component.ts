import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {TopicService} from '../../services/topic.service';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Topic} from '../../models/topic';
import {User} from '../../models/user';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService, TopicService]
})
export class UserDetailComponent implements OnInit {
  public page_title:string;
  public user:User;
  public url:String;
  public topics_list : Array<Topic>;
  constructor(
    private _USERsERVICE:UserService,
    private _TOPICSERVICE:TopicService,
    private _route:Router,
    private _router:ActivatedRoute
  ) {
    this.url = environment.url;
    this.page_title = 'Perfil';
   }

  ngOnInit(): void {
    this.obtenerperfil();
  }

  obtenerperfil(){
    this._router.params.subscribe(params =>{
      let id = params['number'];
      console.log(id);
      this._USERsERVICE.getuser_id(id).subscribe(
        response =>{
          if(response.usuario){
            this.user = response.usuario;
            this.gettopics(this.user._id);
          }
        },
        error =>{
          
          console.log(<any>error);
        }
      )
    })
  }

  gettopics( id){

    this._TOPICSERVICE.getmyTopics(id).subscribe(
      response =>{
        if(response.topics){
          this.topics_list = response.topics;         
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
