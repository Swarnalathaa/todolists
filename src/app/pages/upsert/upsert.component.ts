import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  title = '';
  content = '';

  constructor( private activeModal: NgbActiveModal, private listService: ListService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  add(){
    const payload = {
      title: this.title,
      content: this.content,
      username: localStorage.getItem('userName')
    }
    this.listService.createList(payload).subscribe(res => {
      if (res.data.createTodo?.success) {
        this.toastr.success('Added ToDo to the list');
      }
    }, error => {
      this.toastr.error(error);
    })
  }
  close(){
    this.activeModal.close();
  }
}
