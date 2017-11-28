import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule ],
  exports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule],
})
export class MaterialModule { }