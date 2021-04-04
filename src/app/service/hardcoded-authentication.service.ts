import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'max' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username)
      return true
    }
    return false
  }

  isUserLoggedId() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
}
