import { Component } from '@angular/core';
import productData from './product_data';
import { RouterLink } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  imports: [
    // FontAwesomeModule
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productsArr = productData;
  // faStar = faStar;
}
