import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promo-site-smeta';
  // test(){
  //   console.log('Test');
  // }

  submit(){
    console.log('Submit Test');
  }
}
