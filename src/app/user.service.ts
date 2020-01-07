import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //private userUrl = 'http://localhost:8080/users';
  private userUrl = 'http://localhost:8080/users';
  
  public getUsers() {
    return this.http.get<User>(this.userUrl);
  }
}
