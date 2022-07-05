import { Component } from '@angular/core';
import { Tab } from './components/tabs/interfaces';

@Component({
  selector: 'site-ecommerce-fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabsList: Tab[] = [
    {
      name: 'Login',
      routerLink: 'login'
    },
    {
      name: 'Cadastre-se aqui',
      routerLink: 'register'
    }
  ];
}
