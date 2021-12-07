import { Component } from '@angular/core';
import { AppConfiguration } from './config/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-config-json';
  /**
   *
   */
  constructor(private appConfig: AppConfiguration) {
    this.title = this.appConfig.title;
    console.log(this.appConfig);
  }
}
