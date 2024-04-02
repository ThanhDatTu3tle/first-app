import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        InputTextModule,
        PasswordModule,
        ButtonModule,
        CalendarModule,
        FileUploadModule,

        UserProfileRoutingModule
    ],
    declarations: [UserProfileComponent]
})
export class UserProfileModule { }
