import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = '';
  phone = '';

  constructor(){

  }

  submitForm() {
    alert('I am still working on this form. email me at pcalvo@coffeestain.io')
  }

}
