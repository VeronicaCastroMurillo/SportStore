import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarMenuComponent } from '../components/bar-menu/bar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SportStore';
}
