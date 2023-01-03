import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  status = false;
  nombre! :string;

  names = ['John', 'Paul', 'George', 'Ringo', 'Pete Best'];
  dia! :string;

}
