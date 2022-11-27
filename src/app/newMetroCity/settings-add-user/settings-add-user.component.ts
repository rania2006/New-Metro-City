import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings-add-user',
  templateUrl: './settings-add-user.component.html',
  styleUrls: ['./settings-add-user.component.css']
})
export class SettingsAddUserComponent implements OnInit {

  constructor(private user:ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.user.removeTokenOnLogout();
  }

}
