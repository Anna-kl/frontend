import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";
import {ModalEnterDataComponent} from "../modal-enter-data/modal-enter-data.component";
import {ModalRegisterEndComponent} from "../modal-register-end/modal-register-end.component";

@Component({
  selector: 'app-modal-register-next',
  templateUrl: './modal-register-next.component.html',
  styleUrls: ['./modal-register-next.component.css']
})
export class ModalRegisterNextComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }


  ngOnInit(): void {
  }

  next() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterEndComponent);
    modalRef.componentInstance.name = 'World';
  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalEnterDataComponent);
    modalRef.componentInstance.name = 'World';
  }

}
