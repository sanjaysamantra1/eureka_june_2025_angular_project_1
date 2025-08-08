import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { StocksComponent } from '../stocks/stocks.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent
    // StocksComponent
    // ProductListComponent
    // MyModalComponent
    // PipesComponent
    // ParentComponent
    // Math1Component,
    // Math2Component
    HttpDemo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class BodyComponent {

}
