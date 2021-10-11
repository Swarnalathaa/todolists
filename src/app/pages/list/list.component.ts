import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ListService } from 'src/app/shared/services/list.service';
import { UpsertComponent } from '../upsert/upsert.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList: any[] = [];

  constructor( private listService: ListService, private modalService: NgbModal, private activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(res => {
      console.log(res);
      if (res.data?.TodoLists) {
        this.todoList = res.data.TodoLists
      }
    }, error => {
      this.toastr.error(error);
    })
  }
  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {size: 'lg'});
  }
  openTask() {
    const modalRef = this.modalService.open(UpsertComponent, {size: 'lg'})
  }
}
