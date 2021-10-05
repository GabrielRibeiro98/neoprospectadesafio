import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Neoprospecta';

  linkGithub() {
    window.open('https://github.com/GabrielRibeiro98');
  }

  linkLinkedin() {
    window.open('https://www.linkedin.com/in/gabrielribeiro98/');
  }
}
