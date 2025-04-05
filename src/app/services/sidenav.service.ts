import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable(); // Observador para el estado

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  setState(state: boolean) {
    this.isOpenSubject.next(state);
  }
}
