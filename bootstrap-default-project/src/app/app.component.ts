import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  usernameNew = 'usuarioInicial';
  values = [3];
  onInputUsername (event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onAdditionClick() {
    this.values.push(Math.random());
  }

}
