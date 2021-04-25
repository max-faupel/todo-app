import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private basicAuthenticationService: JwtAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response)
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}
