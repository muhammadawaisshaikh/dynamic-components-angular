import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';

@NgModule({
  declarations: [
    ModalComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TabsComponent
  ]
})
export class SharedModule { }
