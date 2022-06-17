import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Todo, UserInfo } from './common.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loginedUserInfo = new BehaviorSubject<any>({})
  constructor(private http: HttpClient) { }
  updateLogiedInUser(userInfo: UserInfo) {
    this.loginedUserInfo.next(userInfo);
  }
  
  getLoggedinUser(): Observable<UserInfo> {
    return this.loginedUserInfo.asObservable();
  }

  getTodosList():Observable<Todo[]> {
    return this.http.get('../../assets/todos-response.json').pipe(map(res => <Todo[]>JSON.parse(JSON.stringify(res))));
  }
}
