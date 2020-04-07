import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Topic} from '../../../models/topic';
import {UserService } from '../../../services/user.service';
import {TopicService} from '../../../services/topic.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService,TopicService]
})
export class EditComponent implements OnInit {

  public page_title:string;
  public topic: Topic;
  public identity;
  public token;
  public status:string;
  public isedit;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _topicService:TopicService
  ) {
    this.identity= this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.page_title = ' Editar Tema';
    this.topic = new Topic('','','','','','',this.identity._id,null);
    this.isedit= true;
   }


  ngOnInit(): void {
    this.gettopic();

  }

  gettopic(){
    this._route.params.subscribe(Params=>{
      let id = Params['id'];

      this._topicService.gettopic(id).subscribe(
        response =>{
          
          if(!response.topic){
            this._router.navigate(['/panel']);
          }else{
            this.topic = response.topic;
          }

        },
        error =>{
          console.log(<any>error);
        }
      );
    })
  }

  agregar(form){
   
    this._topicService.update(this.token, this.topic._id, this.topic).subscribe(
      response =>{
        if(response.topic){
          this.status = 'Success';
          this.topic = response.topic;
        }else{
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
