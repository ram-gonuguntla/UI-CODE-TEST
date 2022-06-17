import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './data.resolver';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { OnlyLoggedInUsersGuard } from './utils/router-guard';

const routes: Routes = [{
  path:'', component: LoginComponent,
}, {
  path:'todo', component: TodoComponent, resolve: {todoData: DataResolver}, canActivate: [OnlyLoggedInUsersGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
