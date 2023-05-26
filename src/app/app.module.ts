import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [HttpClient, ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
