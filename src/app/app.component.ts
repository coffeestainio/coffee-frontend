import { Component } from '@angular/core';
import { ContactService } from "./services/contact.service";


@Component({
  selector: 'app-root',
  providers: [ContactService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = '';
  phone = '';

  constructor(private contactService: ContactService){
    this.email='';
    this.phone='';
  }

  submitForm() {

    this.contactService.register(this.email,this.phone)
    .subscribe(
      res => 
      {
        //sohw message
        alert("I got your contact info. I will get in touch as soon as possible!!");
      },
      () => alert("Something broke, make sure you are submitting all the fields.\nIf this keeps happening, please email me at pcalvo@coffeestain.io")
    );
  }

}
