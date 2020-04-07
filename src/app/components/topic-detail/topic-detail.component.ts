import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TopicService} from '../../services/topic.service';
import {Topic} from '../../models/topic';
import {Comment} from '../../models/comment';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  providers: [TopicService, UserService, CommentService]
})
export class TopicDetailComponent implements OnInit {
  public status:string;  
  public topic:Topic;
  public identity;
  public token;
  public comment:Comment;
  public url:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private Topicservice:TopicService,
    private _userService:UserService,
    private _commentService:CommentService
  ) { 
    this.identity = this._userService.getidentity();
    if(this.identity == null){
      this.identity = '';
    }
    this.token = this._userService.gettoken();
    this.comment = new Comment('','','', this.identity._id)
    this.url = environment.url;
  }

  ngOnInit(): void {
    this.gettopics();
  }

  gettopics(){
    this._route.params.subscribe(params =>{
      var id = params['number'];
      this.Topicservice.findtopic(id).subscribe(
        response =>{
          if(response.topic){
            this.topic = response.topic;
          }else{
            this._router.navigate(['/inicio']);
          }
        },
        error =>{
          console.log(<any>error);
        }
      )
    })
    
  }

  agregar_cometario(form){
    this._commentService.agregarcomentario(this.token, this.comment, this.topic._id).subscribe(
      response =>{
        if(!response.topic){
          this.status = 'error';
      
        }else{
          this.status = 'Success';
          this.topic = response.topic;
          form.reset();      
        }

      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

  borrarComentario(idcomentario){
    console.log(idcomentario)
    console.log(this.topic._id)
    this._commentService.delete(this.token, this.topic._id, idcomentario).subscribe(
      response =>{
        if(!response.topic){
          this.status = 'error';
      
        }else{
          this.status = 'Success';
          this.topic = response.topic;
          
        }

      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    )

}


}