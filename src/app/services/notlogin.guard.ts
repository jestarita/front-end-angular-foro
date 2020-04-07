import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable()
export class notloginGuard implements CanActivate{

    constructor(
        private _route:Router,
        private _userservice:UserService
    ){

    }
    canActivate() {
        let identity = this._userservice.getidentity();

        if(identity && identity.name){
            this._route.navigate(['/inicio']);
            return false;
        }else{          
            return true;
        }
    }

    
}