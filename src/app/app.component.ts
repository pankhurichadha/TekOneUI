import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { Details } from './user/details.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  userInfo: Details = { name: '', image: '' };
  title = 'app';
  constructor(private _userService: UserService) {
    this._userService.getInfo().subscribe(userInfo => this.userInfo = userInfo);
  }
}
