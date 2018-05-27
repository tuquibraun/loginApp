import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}
  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/welcome'])
    }).catch( (err) =>{
      console.log(err);
    });
  }

}
