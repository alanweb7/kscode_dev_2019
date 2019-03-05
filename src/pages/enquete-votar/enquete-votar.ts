import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
@IonicPage()
@Component({
  selector: 'page-enquete-votar',
  templateUrl: 'enquete-votar.html',
})
export class EnqueteVotarPage {

  constructor( 
            public navCtrl         : NavController, 
            public navParams       : NavParams,
            private photoViewer    : PhotoViewer,
            public  viewCtrl       : ViewController, 
          ) {
  }
//visualizar foto tamnho maior
viewPhoto(img){
  this.photoViewer.show(img);
}
ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueteVotarPage');
}
fecharAvaliacao(){
   this.viewCtrl.dismiss();
}

}
