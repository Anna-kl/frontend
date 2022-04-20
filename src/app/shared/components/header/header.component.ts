import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../service/nav.service';
import {Users} from '../../../components/users/users';
import {DataServices} from '../../data.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public rightsidebar = false;
  public open = false;
  public openNav = false;
  public isOpenMobile: boolean;
 public Account: Users;
  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, private dataservice: DataServices) { }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }
  right_side_bar() {
    this.rightsidebar = !this.rightsidebar
    this.rightSidebarEvent.emit(this.rightsidebar)
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }


  ngOnInit() {
    this.dataservice.users.subscribe(user => this.Account = user);
  }

}
