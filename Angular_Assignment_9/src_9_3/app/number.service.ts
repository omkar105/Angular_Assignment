import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  constructor() { }
  public ChkPrime(No1 : number): any
  {
    if(No1 == 1)
    {
      return No1 +" is Prime Number"
    }
    else if (No1 > 1)
    {
      for (let i = 2;i < No1;i++)
      {
        if (No1 % i == 0)
        {
          return No1 +" is Not Prime Number"
        }
        else
        {
          return No1 +" is Prime Number"
        }
      }
    }

  }
}