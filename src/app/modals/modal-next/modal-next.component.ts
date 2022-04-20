import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";

@Component({
  selector: 'app-modal-next',
  templateUrl: './modal-next.component.html',
  styleUrls: ['./modal-next.component.css']
})
export class ModalNextComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(){
      this.activeModal.close();
      const modalRef = this.modalService.open(ModalRegisterComponent);
      modalRef.componentInstance.name = 'World';
  }

}
