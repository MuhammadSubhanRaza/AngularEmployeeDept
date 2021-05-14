import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service'

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  departmentData : any = []

  refreshDepartmentList()
  {
    this.service.getDepartmentsList().subscribe((data : any)=>{
      this.departmentData = data;
    });
  }

  modalTitle:string;

  dep : any;

  ActivateAddEditComp:boolean = false;

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.modalTitle = "Add Department";
    this.ActivateAddEditComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditComp = false;
    this.refreshDepartmentList();
  }

  editClick(item){
    this.dep = item;
    this.modalTitle = "Edit Department";
    this.ActivateAddEditComp = true;
  }

}
