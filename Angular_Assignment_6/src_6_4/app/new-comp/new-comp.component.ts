import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {
  public Name : string = "Marvellous";
  public LowerCaseName : string = this.Name.toLowerCase();
  public UpserCaseName : string = this.Name.toUpperCase();
  public NewName : string = this.Name + " Inforsystem";
}
