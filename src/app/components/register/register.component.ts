import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public page_title:string;
  public user:User;
  public status:string;
  constructor(
    private userService:UserService
  ) {
    this.page_title = 'Registrate';
    this.user = new User('','','','','','','ROLE_USER');
   }

  ngOnInit(): void {

  }

  Registrar(form){

    this.userService.save(this.user).subscribe(
      response =>{
        if(response.user && response.user._id){
          this.status = 'Success'
          form.reset();
        }else{
          this.status = 'error'
        }

      },
      error=>{
        console.log(<any>error);
      }
    );
  }

 
}
