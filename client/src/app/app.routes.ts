import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { CollectionsComponent } from './features/collections/collections.component';
import { InteriorsComponent } from './features/interiors/interiors.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Woodpecker Crafts & Interiors'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us | Woodpecker'
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    title: 'Collections | Woodpecker'
  },
  {
    path: 'interiors',
    component: InteriorsComponent,
    title: 'Interiors | Woodpecker'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Woodpecker'
  },
  {
    path: '**',
    redirectTo: ''
  }
];