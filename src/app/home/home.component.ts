import { Component, OnInit, Input } from '@angular/core';
import {trigger, style, transition, animate, keyframes,query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('things', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('10ms', [
          animate('200ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(25px)', offset: .8}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('10ms', [
          animate('200ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .2}),
            style({opacity: 0, transform: 'translateY(100px)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  things = [];
  thingsCount: number = 0;
  thingsInput = "Thing Input";
  constructor(private _data: DataService) { 
    
  }

  ngOnInit() {
    this._data.thing.subscribe(res => this.things=res);
    this.thingsCount = this.things.length;
    this._data.changeThing(this.things);
  }
   AddThing() {
    this.things.push(this.thingsInput);
    this.thingsCount = this.things.length;
    this._data.changeThing(this.things);
  }
  RemoveThing(i:number){
    this.things.splice(i,1);
    this.thingsCount = this.things.length;
    this._data.changeThing(this.things);
  }
}
