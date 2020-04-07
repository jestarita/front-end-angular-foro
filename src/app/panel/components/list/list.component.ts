import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Topic} from '../../../models/topic';
import {UserService } from '../../../services/user.service';
import {TopicService} from '../../../services/topic.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent implements OnInit {

  public page_title:string;
  public topic: Array<Topic>;
  public identity;
  public token;
  public status:string;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _topicService:TopicService
  ) {
    this.identity= this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.page_title = 'listado de  Temas';
  
   }

  ngOnInit(): void {
    this.gettopics();
   
  }

  gettopics(){

    this._topicService.getmyTopics(this.identity._id).subscribe(
      response =>{
        if(response.topics){
          this.topic = response.topics;
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  eliminar(id){
    this._topicService.delete(this.token, id).subscribe(
      response=>{
        if(response.topic){
          this.status = 'Success';
          this.gettopics();
        }
        else{
          this.status = 'error';
        }
      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

}
