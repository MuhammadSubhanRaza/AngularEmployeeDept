import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  APIUrl = 'http://localhost:59160/api'
  PhotoUrl = 'http://localhost:59160/Photos'


  getDepartmentsList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Departments');
  }

  addDepartment(value:any)
  {
    return this.http.post(this.APIUrl+'/Departments',value)
  }

  updateDepartment(val:any)
  {
    return this.http.put(this.APIUrl+"/Departments/",val)
  }

  deleteDepartment(val:any)
  {
    return this.http.delete(this.APIUrl+"/Departments"+val)
  }

//-------------- EMPLOYEE METHODS
  
  getEmployeesList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Employees');
  }

  addEmployee(value:any)
  {
    return this.http.post(this.APIUrl+'/Employees',value)
  }

  updateEmployee(val:any)
  {
    return this.http.put(this.APIUrl+"/Employees",val)
  }

  deleteEmployee(val:any)
  {
    return this.http.delete(this.APIUrl+"/Employees"+val)
  }

  uploadPhoto(val:any)
  {
    return this.http.post(this.APIUrl+'/Employees/SaveFile',val)
  }

  getAllDepartmentNames():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIUrl+'GetAllDepartmentNames')
  }

}
