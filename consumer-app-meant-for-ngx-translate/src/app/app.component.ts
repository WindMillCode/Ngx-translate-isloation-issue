import { Component } from '@angular/core';
import { WmlButtonZeroParams } from '@windmillcode/angular-wml-button-zero';
import { WMLUIProperty } from '@windmillcode/wml-components-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consumer-app';

  wmlButtonZero = new WmlButtonZeroParams({
    text:new WMLUIProperty({
      text:"WmlButtonZero.label"
    })
  })
}
