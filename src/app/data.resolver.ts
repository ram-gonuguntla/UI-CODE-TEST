import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Todo } from './utils/common.interface';
import { UtilService } from './utils/util.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<Todo[] | string> {
  constructor(private utilService: UtilService){

  }
  resolve(): Observable<Todo[] | string> {
    return this.utilService.getTodosList().pipe(map((data: Todo[]) => data), catchError(()=> {return of('data error')}));
  }
}
