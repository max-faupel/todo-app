import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token')
    }
    return null
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let authHeaders = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<AuthenticationBean>('http://localhost:8080/basicauth', { headers: authHeaders }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          sessionStorage.setItem('token', basicAuthHeaderString)
        }
      )
    )
  }
}

export class AuthenticationBean {
  constructor(
    public message: string
  ) { }
}
