import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Franklin Richard", 'W234','@.net']
  info2: string[] = ["Frank Ted", 'W234','@.net']
  info3: string[] = ["Kelin Richard", 'W234','@.net']

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
