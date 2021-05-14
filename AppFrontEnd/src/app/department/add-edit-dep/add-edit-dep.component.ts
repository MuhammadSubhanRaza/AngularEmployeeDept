import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service'

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() dep : any;
  DepartmentId : string;
  DepartmentName : string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.departmentId;
    this.DepartmentName = this.dep.departmentName;
  }

  addDepartment()
  {
    var val = {DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName}
    this.service.addDepartment(val).subscribe(data=>{
      alert(data.toString())
    });
  }

  updateDepartment()
  {
    var val = {DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName}
    this.service.updateDepartment(val).subscribe(data=>{
      alert(data.toString())
    });
  }

}
