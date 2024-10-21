import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogCardComponent } from '../app/blog-card/blog-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BlogCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'minimal-blog-card';
}
