import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username!: string;
  password!: string;



  constructor() { }

  ngOnInit(): void {
  }

  /*
  onSubmit() {
    this.userService.logIn(this.username, this.password);
  }
  */

}
