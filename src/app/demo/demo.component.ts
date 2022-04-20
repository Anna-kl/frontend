import {Component, OnInit, ViewEncapsulation, Inject, HostListener, ViewChild} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {Product} from '../shared/classes/product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductsService} from '../shared/services/products.service';
import {ModalComponent} from '../modals/modal/modal.component';
declare var $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: [ProductsService],
  // animations: [
  //   trigger('fade',
  //   [
  //     state('void', style({ opacity : 0})),
  //     transition(':enter', [ animate(300)]),
  //     transition(':leave', [ animate(500)]),
  //   ]
  // )]
})
export class DemoComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productsService: ProductsService, private modalService: NgbModal) { }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 550) {
  //      const element = document.getElementById('header-stick');
  //      element.classList.add('sticky');
  //    } else {
  //     const element = document.getElementById('header-stick');
  //       element.classList.remove('sticky');
  //    }

  @ViewChild('myModal', {static: false}) myModal: any;
  private modalRef: any;

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
    $.getScript('assets/js/script.js');
    this.open();
    this.productsService.getProducts().subscribe(product => {
      product.filter((item: Product) => {
        if (item.category === 'pets') {
          this.products.push(item);
        }
      });
    });
  }

}
