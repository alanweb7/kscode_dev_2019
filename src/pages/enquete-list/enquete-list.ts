import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnqueteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquete-list',
  templateUrl: 'enquete-list.html',
})
export class EnqueteListPage {
  token            : any;
  code             : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.token            = this.navParams.get('token');
    this.code             = this.navParams.get('code');
    console.log('ionViewDidLoad EnqueteListPage');
  }
  addEnquete(){
    this.navCtrl.push('EnqueteAddPage', {token:this.token,code:this.code });
  }

}
