import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { Details } from './details.interface';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MatMenuTrigger]
})
export class UserComponent implements OnInit {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  userInfo: Details;
  constructor(private _userService: UserService) { }
  ngOnInit() {
    this._userService.getInfo().subscribe(userInfo => this.userInfo = userInfo);
  }


}
