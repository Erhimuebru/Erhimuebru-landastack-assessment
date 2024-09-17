// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'erhimuebru-lendastack-assessment';
// }

import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { ItemsComponent } from './components/items/items.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    ButtonModule,
    ItemsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'erhimuebru-lendastack-assessment';
}
