import { NgModule } from '@angular/core';
import {
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatSidenavModule, MatTableModule, MatPaginatorModule,
    MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
        MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
        MatSidenavModule, MatTableModule, MatPaginatorModule, MatSelectModule,
    ],

    exports: [MatNativeDateModule, FormsModule,
        MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
        MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatSidenavModule, MatTableModule, MatPaginatorModule,
        MatSelectModule,
    ],

})

export class MyMaterialModule { }