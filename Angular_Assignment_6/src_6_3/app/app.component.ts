import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label for = "Marvellous" class = "colour" > Marvellous Infosystem : </label>
  <input type = "text" id = "Marvellous" />
  `,
  styles: [`
    .colour
    {
      color: Blue;
    }
  `]
})
export class AppComponent {
  title = 'Angular_Assignment_6';
}
