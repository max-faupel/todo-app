import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = ''
  message: string = ''
  errorMessage: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['name']
    console.log(this.username)
  }

  getWelcomeMessage() {
    this.service.getWelcomeMessage().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageForUser() {
    this.service.getWelcomeMessageForUser(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: WelcomeBean) {
    this.message = response.message
  }

  handleErrorResponse(error: any): void {
    this.errorMessage = error.error.message
  }
}
