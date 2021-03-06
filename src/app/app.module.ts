import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressBarModule } from '@angular/material';
import {RouterModule} from '@angular/router';

import { userReducer } from './store/reducers/user.reducer';
import { AppComponent } from './app.component';
import {UserModule} from './store/user.module';
import {NavbarModule} from './navbar/navbar.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {SidebarService} from './services/sidebar.service';
import {HomeModule} from './home/home.module'
import {ViewVideoModule} from './view-video/view-video.module'
import {ViewModule} from './view/view.module';
import {ViewPlaylistModule} from './view-playlist/view-playlist.module';
import {ReusableComponentsModule} from './reusable-components/reusable-components.module'
import {DialogCloseComponent} from './reusable-components/dialog-close/dialog-close.component'
import {DialogUploadComponent} from './reusable-components/dialog-upload/dialog-upload.component'
import {DialogAddVideoPlaylistComponent} from './reusable-components/dialog-add-video-playlist/dialog-add-video-playlist.component';
import {DialogCreatePlaylistComponent} from './reusable-components/dialog-create-playlist/dialog-create-playlist.component';
import {MatDialogModule } from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';
import {ProfileModule} from './profile/profile.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {SearchModule} from './search/search.module';
import {ViewVideoListModule} from './view-video-list/view-video-list.module';
import {VideoListModule} from './video-list/video-list.module';
import { UnreachableComponent } from './unreachable/unreachable.component';
import { ErrorStatusCodeComponent } from './error-status-code/error-status-code.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UnreachableComponent,
    ErrorStatusCodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    BrowserAnimationsModule,
    MatProgressBarModule,
    UserModule,
    NavbarModule,
    SidebarModule,
    HomeModule,
    LoginModule,
    ViewVideoModule,
    ViewModule,
    SearchModule,
    ViewVideoListModule,
    RegisterModule,
    ProfileModule,
    AppRoutingModule,
    ReusableComponentsModule,
    MatDialogModule,
    MatInputModule,
    VideoListModule
  ],
  providers: [
    SidebarService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogCloseComponent,
    DialogUploadComponent,
    DialogAddVideoPlaylistComponent,
    DialogCreatePlaylistComponent
  ]
})
export class AppModule { }
