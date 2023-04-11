import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'structuralDirective';

  isValid:boolean = false;

  onCreateBlock(){
    this.isValid = true;
  }

  products = [
    {img:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1814&q=80',name:'Laptop',id:'1453',price:15000},
    {img:'https://images.unsplash.com/photo-1629494893504-d41e26a02631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80',name:'Mobile',id:'2653',price:20000},
    {img:'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',name:'T.V.',id:'3156',price:25000},
    {img:'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2039&q=80',name:'Washing Machine',id:'9874',price:35000}

  ]
}
