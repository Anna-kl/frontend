import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';
import {HomeFourComponent} from './shop/home-4/home-four.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RememberComponent} from './components/auth/remember/remember.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: DemoComponent
  },

  {
    path: '',
    // redirectTo: 'home/four',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      }
    ],
  },
  {
    path: '*',
    redirectTo: 'home/four'
  },
    {
        path: 'backend',
        component: LoginComponent,
    },
  {
    path: 'settings',
    loadChildren: () => import('./components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: "Settings"
    }
  },
  //   , {
  //   path: 'remember',
  //   component: RememberComponent,
  //   // сomponent: LoginComponent
  // }
  // {
  //   path: 'product',
  //   component: HomeFourComponent
  // },
  {
    path: 'remember',
    component: RememberComponent,
  },
];

