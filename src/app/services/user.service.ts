import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable()

export class UserService {
  public url: string;
  public identity;
  public token;
  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.url;
  }

  save(user): Observable < any > {
    //definir json
    let params = JSON.stringify(user);
    //definir cabeceras
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'save', params, {
      headers: header
    });
  }

  signup(user, token = null): Observable < any > {

    //validar si hay token 
    if (token != null) {
      user.gettoken = token;
    }

    let params = JSON.stringify(user);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login', params, {
      headers: header
    });
  }

  getidentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity && identity != null && identity != 'Undefinied') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  gettoken() {
    let token = localStorage.getItem('token');

    if (token && token != null && token != 'Undefinied') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  update(user): Observable < any > {
    //definir json
    let params = JSON.stringify(user);
    //definir cabeceras
    let header = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', this.gettoken());
    return this._http.put(this.url + 'user/update', params, {
      headers: header
    });

  }

  getusers(): Observable < any >{
    return this._http.get(this.url+'get-users')
  }

  getuser_id(id): Observable < any >{
    return this._http.get(this.url+'get-user/'+id)
  }

}
