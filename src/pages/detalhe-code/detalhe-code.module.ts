import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCodePage } from './detalhe-code';
import { HistoricoService } from '../../providers/historico/historico.service';
import { OneSignal } from '@ionic-native/onesignal'; 
import { PhotoViewer } from '@ionic-native/photo-viewer';
@NgModule({
  declarations: [
    DetalheCodePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCodePage),
  ],
  
  
  providers: [
    HistoricoService,
    OneSignal,
    PhotoViewer
  ]
})
export class DetalheCodePageModule {}
