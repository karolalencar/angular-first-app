import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img src="/assets/logo.svg" alt="logo" class="brand-logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
