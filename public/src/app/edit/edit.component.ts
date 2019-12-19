import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public eRest : any = {};
  public rest_id : string = "";
  private _http : HttpService;
  public error2s: any = {};

  constructor(httpService : HttpService, route : ActivatedRoute, router : Router) { 
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const restObservable : Observable<any> = this._httpService.getOneRest(params['_id']);
      restObservable.subscribe( res => {this.eRest = res});
    });
  }
  updateRest(_id){
    let Observable = this._httpService.updateRest(_id, this.eRest);
    Observable.subscribe(res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
