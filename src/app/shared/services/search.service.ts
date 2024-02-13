import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

   searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
   constructor() { }
   transferData(searchWord:string) {
      this.searchSubject.next(searchWord);
   }
   getData(): Observable<string> {
     return  this.searchSubject.asObservable();
   }
}
