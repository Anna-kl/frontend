import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import {UploadModule} from '@progress/kendo-angular-upload';

@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SettingRoutingModule,
        SharedModule,
        FormsModule,
        UploadModule
    ]
})
export class SettingModule { }
