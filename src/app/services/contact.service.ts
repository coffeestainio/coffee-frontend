import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../config";

@Injectable()
export class ContactService {

  constructor(private http: Http) {}

  register(email, phone) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "contact/add",
      JSON.stringify({
        email: email,
        phone: phone
      }),
      { headers: headers }
    )
    .map(res => res.json())
    .catch(
        this.handleErrors
    );
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error); 
  }

}
