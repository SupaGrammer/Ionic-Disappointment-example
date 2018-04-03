import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataService {
 url = 'https://jsonplaceholder.typicode.com/users';

 constructor(private http: HttpClient) {}

 getData() {
   const req = new HttpRequest('GET', this.url, {
     reportProgress: true
   });
   console.log(this.http.request(req));
   return this.http.request(req);
   
 }
}
// providers are a subclass of a service
// providers are the respresentation of the model and provide data to the view