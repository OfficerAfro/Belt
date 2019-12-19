import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public newRest: any ={};
  public rests: any =[];
  public review: any = {rating: 3};
  private _http : HttpService;
  public errors : any = {};
  private _router : Router;

  constructor(httpService : HttpService, router: Router){
    this._http = httpService;
    this._router = router;
  }

  ngOnInit()
  {
    const allRestsObservable: Observable<any> = this._http.getAll();
    allRestsObservable.subscribe(res => {this.rests = res;
    this.rests.forEach(c => {
      c.isHere = false
    })});
  }
  Addrest(){
    const restservable: Observable<any> = this._http.create(this.newRest);
    restservable.subscribe(res => {
      this.ngOnInit();
      this.newRest = {};
      if(res.errors) {
      this.errors = res.errors;
    } else {
      this._router.navigate(['/']);
    }

    });
  }
  treview(i) {
    this.rests.forEach(c => {
      c.isHere = false
    });
    this.rests[i].isHere = true;
  }
  leaveRe(_id){
    const allRestsObservable: Observable<any> = this._http.review(_id, this.review);
    allRestsObservable.subscribe(res => {  console.log(res);
      this.review = {};
      this.rests.forEach(c => {
        c.isHere = false
      });
      this.ngOnInit();
    });

  }
  explode(_id : string) : void {
    const allRestsObservable : Observable<any> = this._http.done(_id);
    allRestsObservable.subscribe(res => this.ngOnInit());

  }
}
