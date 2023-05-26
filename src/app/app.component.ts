import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('api/addresses/export').subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    });


  }
}
