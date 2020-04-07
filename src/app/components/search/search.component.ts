import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TopicService} from '../../services/topic.service';
import {Topic} from '../../models/topic';
@Component({
  selector: 'app-search',
  templateUrl: '../topic/topic.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TopicService]
})
export class SearchComponent implements OnInit {
  public page_title:string;
  public topic_list:Array<Topic>
  public topics_list;
  public status:string;  
  public totalPages;
  public page;
  public nextpage:number;  
  public previouspage;
  public number_pages;
  public nopaginate;
  constructor(
    private _TOPICSERVICE:TopicService,
    private _route:Router,
    private _router:ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.gettopics();
    this.nopaginate = false;
  }

  gettopics(){
    this._router.params.subscribe(params =>{
      let id = params['search'];
      this.page_title = 'Buscar: '+id;
      this._TOPICSERVICE.search_topic(id).subscribe(
        response =>{
          if(response.topics){
            this.topics_list = response.topics;         
          }
        },
        error =>{
          console.log(<any>error);
        }
      )
    });    
  }

}
