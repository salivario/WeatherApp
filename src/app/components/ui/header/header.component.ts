import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items!: MenuItem[];
  

  ngOnInit() {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-file',
          routerLink: '/'
      },
      {
        label: 'Favorite',
        icon: 'pi pi-fw pi-file',
        routerLink: '/favorite'
      }
      ];
  }
}
