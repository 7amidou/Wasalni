import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<any>


  constructor(private fa:AngularFireAuth) { 
    this.user=this.fa.user
  }
}
