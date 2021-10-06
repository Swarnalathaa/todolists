import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList: any[] = [];

  constructor( private listService: ListService, private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(res => {
      console.log(res);
    })
  }
  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent, {size: 'lg'});
  }
}
