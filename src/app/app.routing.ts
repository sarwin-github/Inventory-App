import { Routes } from '@angular/router';
import { UserGuard } from './shared/guard/auth/user.guard';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderInventoryComponent } from './shared/components/header-inventory/header-inventory.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'user',
        loadChildren: './views/auth/user.module#UserModule'
      }
    ]
  },
  {
    path: '',
    component: HeaderInventoryComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: './views/inventory/inventory.module#InventoryModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
