import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";
import {ModalRegisterNextComponent} from "../modal-register-next/modal-register-next.component";

@Component({
  selector: 'app-modal-enter-data',
  templateUrl: './modal-enter-data.component.html',
  styleUrls: ['./modal-enter-data.component.css']
})
export class ModalEnterDataComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  next() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterNextComponent);
    modalRef.componentInstance.name = 'World';
  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalRegisterComponent);
    modalRef.componentInstance.name = 'World';
  }


}
