import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from './shop/shop.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { rootRouterConfig } from './app.routes';
// import ngx-translate and the http loader
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';
import * as $ from 'jquery';
import {AuthModule} from './components/auth/auth.module';
import {DataServices} from './shared/data.services';
import {UsersModule} from './components/users/users.module';
import {MenusModule} from './components/menus/menus.module';
import {MediaModule} from './components/media/media.module';
import {PagesModule} from './components/pages/pages.module';
import {SettingModule} from './components/setting/setting.module';
import {ModalComponent} from './modals/modal/modal.component';
import {ModalNextComponent} from './modals/modal-next/modal-next.component';
import {ModalEnterDataComponent} from './modals/modal-enter-data/modal-enter-data.component';
import {ModalRegisterEndComponent} from './modals/modal-register-end/modal-register-end.component';
import {ModalRegisterNextComponent} from './modals/modal-register-next/modal-register-next.component';
import {ModalRegisterComponent} from './modals/modal-register/modal-register.component';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DemoComponent,
    ModalComponent,
    ModalNextComponent,
    ModalRegisterComponent,
    ModalEnterDataComponent,
    ModalRegisterNextComponent,
    ModalRegisterEndComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ShopModule,
    SharedModule,
      SettingModule,
      // PagesModule,
      // MediaModule,
    // MenusModule,
      // UsersModule,
      AuthModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: false,
      enableHtml: true,
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [DataServices],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule { }
