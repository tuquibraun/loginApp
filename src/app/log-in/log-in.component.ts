import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/welcome'])
    }).catch( (err) => {
      console.log(err);
    this.router.navigate(['/sing-in'])
    });
  }

}
