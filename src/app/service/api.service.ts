import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://api.hgbrasil.com/weather?format=json-cors&key=5219cccf';
  constructor(private http: HttpClient) { }
getData(){
return this.http.get(`${this.url}temp`);

}

}
