import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Todo, UserInfo } from '../utils/common.interface';
import { UtilService } from '../utils/util.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList!: Observable<Todo[]>;
  actualTodoList!: Todo[];
  loggedInUser!: UserInfo;
  checked: boolean = false;
  constructor(private utilService: UtilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actualTodoList = this.route.snapshot.data['todoData'];
    this.todoList = this.getdata();
  }

  getdata() {
    return this.utilService.getLoggedinUser().pipe(switchMap(user=> {
      this.loggedInUser =  user;
      return of(this.actualTodoList.filter(obj => obj.userId === user.id));
    }))
  }

  showCompleted() {
   this.getdata().subscribe(list => {
     this.todoList = of(list.filter(data => this.checked ? data.completed === this.checked : data));
   })
  }
}
