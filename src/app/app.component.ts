import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { CategoriesComponent } from './components/categories/categories.component';
// import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    // CategoriesComponent,
    // CarouselComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eureka_june_2025_angular_project_1';
}
