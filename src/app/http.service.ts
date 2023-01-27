import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
   constructor(private http: HttpClient) {}

   postData() {
      return this.http.post('http://localhost:3000')
   }
}