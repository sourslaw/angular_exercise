import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  // h3 {
  //   color: green;
  // }`] // can do it this way . . .
})
export class AppComponent {
  username = '';
  log = [];

  showSecret = false;

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
 