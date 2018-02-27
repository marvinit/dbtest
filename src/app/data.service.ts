import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private myThings = new BehaviorSubject<any>(["Something", "Anything"]);
  thing = this.myThings.asObservable();
  constructor() { }
  changeThing(thing) {
    this.myThings.next(thing);
  }
}
