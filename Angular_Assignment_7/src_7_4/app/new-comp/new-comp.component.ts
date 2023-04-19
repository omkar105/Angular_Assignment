import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {
  public Name : string = "Marvellous Infosystem";
  public UpperCase : string = "";
  public LowerCase : string = "";

  public Upper()
  {
    this.UpperCase = this.Name.toUpperCase()
  }
  public Lower()
  {
    this.LowerCase = this.Name.toLowerCase()
  }
}
