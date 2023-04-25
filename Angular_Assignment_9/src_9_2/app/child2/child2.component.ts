import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{
  public Str1 = "Hello Every ONE";
  public Result : number = 0;
  constructor(public Sobj : StringService)
  {}
  ngOnInit()
  {
    this.Result = this.Sobj.CountCapital(this.Str1);
  }
}
