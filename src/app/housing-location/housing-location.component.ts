import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}" class="listing-photo">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}