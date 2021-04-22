import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class WelcomeBean {
  constructor(
    public message: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  getWelcomeMessage(): Observable<WelcomeBean> {
    return this.httpClient.get<WelcomeBean>('http://localhost:8080/welcome')
  }

  getWelcomeMessageForUser(username: string): Observable<WelcomeBean> {
    return this.httpClient.get<WelcomeBean>(`http://localhost:8080/welcome/${username}`)
  }
}
