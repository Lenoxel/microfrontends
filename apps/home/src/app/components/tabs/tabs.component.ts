import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './interfaces';

@Component({
  selector: 'site-ecommerce-fc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  @Input() tabsList: Tab[] = [];

  constructor() {}

  ngOnInit(): void {}
}
