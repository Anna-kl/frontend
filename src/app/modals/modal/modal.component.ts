import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalNextComponent} from "../modal-next/modal-next.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public users: any;
  @ViewChild('myModal', {static: false}) myModal: any;
  private modalRef: any;
  constructor(public activeModal: NgbActiveModal, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void { }

  close() {
    this.activeModal.close();
    const modalRef = this.modalService.open(ModalNextComponent);
    modalRef.componentInstance.name = 'World';
  }
}
