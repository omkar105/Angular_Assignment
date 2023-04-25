import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
  constructor()
  { 
  }
  Addition(V1 : number,V2 :number)
  {
    return V1 + V2
  }

  Substraction(V1 : number,V2 :number)
  {
    return V1 -V2
  }
}
