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
import { EmployeesComponent } from '../employees/employees.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { ObservableDemo4Component } from '../observable-demo4/observable-demo4.component';
import { ObservableDemo5Component } from '../observable-demo5/observable-demo5.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

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
    // HttpDemo1Component
    // EmployeesComponent
    // ObservableDemo1Component
    // ObservableDemo2Component
    // ObservableDemo3Component
    // ObservableDemo4Component
    // ObservableDemo5Component
    TodoListComponent,
    TodoAddComponent

  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class BodyComponent {

}
