import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()

export class CommentService {
    public url: string;

    constructor(
        private _http: HttpClient
      ) {
        this.url = environment.url;
      }

      agregarcomentario(token, comment, topic_id):Observable<any>{

        let params = JSON.stringify(comment);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);                                       
        return this._http.post(this.url+'comment/topic/'+topic_id, params, {headers:headers});
      }      

 

      delete(token, topic_id, comment_id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', token);

        return this._http.delete(this.url+'comment/'+topic_id+'/'+comment_id,  {headers:headers});
      }

   
}