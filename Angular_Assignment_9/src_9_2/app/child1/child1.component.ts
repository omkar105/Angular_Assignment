import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit{
  public Value = 12;
  public Ret : any;
  constructor(public Nobj : NumberService)
  {}
  ngOnInit()
  {
    this.Ret = this.Nobj.ChkPrime(this.Value);    
  }
}