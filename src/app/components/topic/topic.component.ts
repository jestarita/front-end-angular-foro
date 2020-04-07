import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TopicService} from '../../services/topic.service';
import {Topic} from '../../models/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [TopicService]
})
export class TopicComponent implements OnInit {

  public page_title:string;
  public topics_list;
  public status:string;  
  public totalPages;
  public page;
  public nextpage:number;  
  public previouspage;
  public number_pages;
  public nopaginate;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private Topicservice:TopicService
  ) {
    this.page_title = 'Temas';
    
   }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = +params['page'];
      if(!id || id == null ||  id == undefined ){
        id = 1;
        this.previouspage=1;
        this.nextpage = 2;
      }
      this.listar_temas(id);
    })
    this.nopaginate = true;
  }

  listar_temas(page = 1){
    var pagina:number = page;
    this.Topicservice.gettopics(page).subscribe(
      response =>{
        if (response.topic){
          this.status = 'Success';
          this.topics_list = response.topic;
          this.totalPages = response.totapages;
 
          var numeberpages = [];
          for (var i = 1; i <= this.totalPages; i++) {
            numeberpages.push(i);
          }
          this.number_pages = numeberpages;         

          if(pagina >=2){
            this.previouspage = pagina-1;
            
          }else{
            this.previouspage =1;
          }
          if(pagina < this.totalPages){
          
            this.nextpage = pagina + 1;
            
          }else{
            this.nextpage = this.totalPages;
          }
        }else{
          this.status = 'error';
          this._router.navigate(['/inicio'])
        }
      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

}
