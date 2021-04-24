import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

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
    return this.httpClient.get<WelcomeBean>(`${API_URL}/welcome`)
  }

  getWelcomeMessageForUser(username: string): Observable<WelcomeBean> {
    return this.httpClient.get<WelcomeBean>(`${API_URL}/welcome/${username}`)
  }
}
