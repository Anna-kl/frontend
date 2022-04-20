import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalEnterDataComponent} from "../modal-enter-data/modal-enter-data.component";
import {ModalNextComponent} from "../modal-next/modal-next.component";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  next() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalEnterDataComponent);
    modalRef.componentInstance.name = 'World';
  }

  back() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalNextComponent);
    modalRef.componentInstance.name = 'World';
  }

}
