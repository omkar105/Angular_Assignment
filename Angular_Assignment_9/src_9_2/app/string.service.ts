import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public CountCapital(Str1 : string)
  {
    let Count = 0;
    for(let i = 0 ; i < Str1.length ; i++)
    {
      if ((Str1.charAt(i) >= 'A') && (Str1.charAt(i) <= 'Z'))
      {
        Count = Count + 1;
      }
    }
    return Count
  }
}
