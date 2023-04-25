import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  public Num1 : number = 20;
  public Num2 : number = 10;
  public Result1 : number = 0;
  public Result2 : number = 0;
  constructor(public Aobj : ArithmaticService)
  {

  }
  ngOnInit()
  {
    this.Result1 = this.Aobj.Addition(this.Num1,this.Num2)
    this.Result2 = this.Aobj.Substraction(this.Num1,this.Num2)
  }

}
