import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor( private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  confirm() {}
  close() {
    this.activeModal.close();
  }

}
