import { Component , OnInit} from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  public Value = 29;
  public Str1 = "We Are Testing SERVICE TopiC";
  public rValue : any;
  public rStr1 : number =0;
  constructor(public Vobj : NumberService, public Sobj : StringService)
  {

  }
  ngOnInit()
  {
    this.rValue = this.Vobj.ChkPrime(this.Value);
    this.rStr1 = this.Sobj.CountCapital(this.Str1);    
  }
}
