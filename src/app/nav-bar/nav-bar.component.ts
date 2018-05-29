import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isLogin: false;
  public nombreUsuario: string;
  public emailUsuario: string;
  constructor(
   public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if( auth ) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        console.log("this shit is working");
      }else{
        this.isLogin = false;
        console.log("this shit is not working");
      }
    })
  }

  onClickLogOut(){
    this.authService.logout();
  }
}
