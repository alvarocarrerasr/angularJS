import { Component } from '@angular/core';
import { HeaderController } from './header/header.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  module = 'recipe';
  title = 'Project Shopping List!';
  controller: HeaderController;
  onInit() {
    this.controller = HeaderController.getInstance();
    this.controller.registerMainComponent(this);
  }
  setModule(module: string) {
    this.module = module;
  }
}
