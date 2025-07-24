import { Component } from '@angular/core';
import * as data from './stock_data.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stocks',
  imports: [
    NgxPaginationModule,
    FormsModule
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  stocksArr = data.stock_fundamentals;
  filteredStocksArr = data.stock_fundamentals;
  p: any = 1;
  searchText: string = '';
  constructor() {
    console.log(this.stocksArr)
  }
  filterStockData() {
    if (this.searchText) {
      this.filteredStocksArr = this.stocksArr.filter((stockObj) => {
        return stockObj.ticker_symbol === this.searchText;
      });
    } else {
      this.filteredStocksArr = this.stocksArr;
    }
  }
  sortStockData(columnName: string ) {
    this.filteredStocksArr = this.stocksArr.sort((stock1: any, stock2: any) => {
      if (stock1[columnName] < stock2[columnName]) {
        return 1;
      } else if (stock2[columnName] < stock1[columnName]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
