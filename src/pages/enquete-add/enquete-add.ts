import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder , Validators} from '../../../node_modules/@angular/forms';
import { NetworkProvider } from '../../providers/network/network';
import { UtilService } from '../../providers/util/util.service';

/**
 * Generated class for the EnqueteAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquete-add',
  templateUrl: 'enquete-add.html',
})
export class EnqueteAddPage {
  model                : enq;
   //validação de formulario
   public loginForm     : any;
  images: any[];
  token: any;
  id_code: any;
  imagesbase64: string;
 
  constructor(
           public navCtrl        : NavController, 
           public formBuilder    : FormBuilder,
           public navParams      : NavParams,
           public alertCtrl      : AlertController,
           public loadingCtrl    : LoadingController,
           public  net           : NetworkProvider,
           public util           : UtilService,
          ) {
            this.model = new enq();
            //instancia do formulario builder para validar os campos
             this.loginForm = formBuilder.group({
                titulo        : ['', Validators.required],
                opcao1        : ['', Validators.required],
                opcao2        : ['', Validators.required],
                data          : ['', Validators.required],
                isAutomatico  : ['', Validators.required],
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueteAddPage');
    this.images       = [];
    this.token        = String;
    this.id_code      = String;
    this.id_code      = "";
    this.token        = "";
    this.imagesbase64 = "";
    this.imagesbase64 = this.navParams.get('imagens');
    this.token        = this.navParams.get('token');
    this.id_code      = this.navParams.get('code');
    this.getImagenServe();
 
  }
  getImagenServe(){
    if(this.imagesbase64 != "" && this.imagesbase64 != null){
         this.images=[];
         for (let i = 0; i < this.imagesbase64.length; i++) {
             this.images.push(this.imagesbase64[i]);
        }
         this.imagesbase64="";
     }
  }
  cam(){
    this.navCtrl.push('EnqueteImagePage',{imagens:this.images,token:this.token,code:this.id_code});
   
  }
}
export class enq{
  titulo        :  String;
  opcao1        : String;
  opcao2        : String;
  data          : String;
  isAutomatico  : Boolean;


}