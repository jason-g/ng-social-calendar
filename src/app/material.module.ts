import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatFormFieldModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule ],
  exports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatFormFieldModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule],
})
export class MaterialModule { }