import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attributeDirective';

  mltClasses = {
    class1:true,
    class2:true,
    class3:true
  }

  mltStyle ={
    'background': 'yellow',
  'border':'10px solid blue'
  }
}
