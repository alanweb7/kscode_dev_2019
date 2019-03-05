import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnqueteAddPage } from './enquete-add';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    EnqueteAddPage,
  ],
  imports: [
    IonicPageModule.forChild(EnqueteAddPage),
    BrMaskerModule,
  ],
})
export class EnqueteAddPageModule {}
