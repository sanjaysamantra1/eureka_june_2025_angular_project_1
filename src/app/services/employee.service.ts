import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/employee_interface';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees'
  constructor(private httpClient: HttpClient) { };

  /* getAllEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.url);
    // returns observable
  } */

  getAllEmployees() : Observable<Employee[]>{ // fetch the data, convert them to Employee Objects and return to comp
    return this.httpClient.get<Employee[]>(this.url).pipe(
      map((response: Employee[]) => {
        console.log(response);
        return response.map((emp: Employee) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal,emp.gender);
        });
      })
    );
  }
}
