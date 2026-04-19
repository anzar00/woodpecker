import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

@Component({
  selector: 'app-home',
  imports: [HeroBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
