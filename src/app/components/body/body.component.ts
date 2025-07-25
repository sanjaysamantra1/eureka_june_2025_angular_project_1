import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { StocksComponent } from '../stocks/stocks.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    DirectivesComponent
    // StocksComponent
    // ProductListComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class BodyComponent {

}
