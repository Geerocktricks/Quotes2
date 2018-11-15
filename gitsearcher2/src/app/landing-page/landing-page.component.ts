import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repo } from '../repo';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  repo = Repo ;
  users = Users;
  public username = ' ';
  constructor() { }

  ngOnInit() {
  }

}
