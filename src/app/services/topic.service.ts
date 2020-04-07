import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Topic} from '../models/topic';
import {environment} from '../../environments/environment';

@Injectable()

export class TopicService {
    public url: string;

    constructor(
        private _http: HttpClient
      ) {
        this.url = environment.url;
      }

      agregarTopic(token, topic):Observable<any>{

        let params = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);                                       
        return this._http.post(this.url+'topic/save', params, {headers:headers});
      }

      getmyTopics(id_user):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'topic/usertopic/'+id_user, {headers:headers});
      }

      gettopic(id_topic):Observable<any>{
      
        return this._http.get(this.url+'topic/'+id_topic);
      }

      update(token, id, topic):Observable<any>{
        let params = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.put(this.url+'topic/'+id, params, {headers:headers});
      }

      delete(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', token);

        return this._http.delete(this.url+'topic/'+id,  {headers:headers});
      }

      gettopics(page=1):Observable<any>{
        return this._http.get(this.url+'/topic/list/'+page);
      }

      findtopic(id):Observable<any>{
        return this._http.get(this.url+'/topic/'+id);
      }

      search_topic(string):Observable<any>{
        return this._http.get(this.url+'/topic/buscar/'+string);
      }
}