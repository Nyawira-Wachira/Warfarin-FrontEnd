import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  loggedinstatus:boolean = false

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loggedinstatus= this.authService.getloginstatus()
  }

  logout():void {
    this.authService.logout()
  }

}
