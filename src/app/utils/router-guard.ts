import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { UtilService } from "./util.service";

@Injectable({
    providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private utilService: UtilService, private router: Router) {}

  canActivate(): Observable<boolean> {
      return this.utilService.getLoggedinUser().pipe(map(data => {
          if(data?.id){
              return true;
          }
          else {
            this.router.navigateByUrl('/')
              return false;
          }
     }))
  }
}

