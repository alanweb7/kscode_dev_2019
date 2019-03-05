import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnqueteImagePage } from './enquete-image';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera, CameraOptions} from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';
@NgModule({
  declarations: [
    EnqueteImagePage,
  ],
  imports: [
    IonicPageModule.forChild(EnqueteImagePage),
  ],
  providers: [
    Camera,
   ImagePicker,
   PhotoViewer
  ]
})
export class EnqueteImagePageModule {}
