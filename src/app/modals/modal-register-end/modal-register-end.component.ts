import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-register-end',
  templateUrl: './modal-register-end.component.html',
  styleUrls: ['./modal-register-end.component.css']
})
export class ModalRegisterEndComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }


  ngOnInit(): void {
  }

  next() {
    this.activeModal.close();
    // const modalRef = this.modalService.open(ModalRegisterEndComponent);
    // modalRef.componentInstance.name = 'World';
  }

}
