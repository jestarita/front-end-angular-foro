import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Topic} from '../../../models/topic';
import {UserService } from '../../../services/user.service';
import {TopicService} from '../../../services/topic.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService,TopicService]
})
export class AddComponent implements OnInit {
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
    this.page_title = 'Crear Nuevo Tema';
    this.topic = new Topic('','','','','','',this.identity._id,null);
    this.isedit = false;
   }

  ngOnInit(): void {
   
  }

  agregar(form){

    this._topicService.agregarTopic(this.token, this.topic).subscribe(
      response =>{
        if(response.topic){
          this.status = 'Success';
          this.topic = response.topic;
          this._router.navigate(['/panel'])
         
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
