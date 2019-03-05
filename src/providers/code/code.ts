import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class CodeProvider {
  public myGlobalVar: string;
  private API_URL = 'https://kscode.com.br/ksc_2020/wp-json/code/search/'
  private API_IMG_URL = 'https://kscode.com.br/ksc_2019/wp-content/uploads/formidable/'
  private APP_URL = 'https://kscode.com.br/wp-json/code/search/?code_number=pesquisa777'
  private APP_URL_CODE ='https://kscode.com.br/ksc_2020/wp-json/admin/v1/users/codes'
  
 
  constructor(
    public http      : Http,
        
  ) { }

getAll(page: any) : Observable<any>{
    let code = page.code;
    let phoneNumber = page.telephone;
    let latitude = page.position.latitude;
    let longitude = page.position.longitude;
   
      let url = this.API_URL + '?code_number='+ code +'&phone='+ phoneNumber +'&latitude='+latitude+'&longitude='+ longitude;
     
      return this.http.get(url).map((resp:Response)=> resp.json());
}
code_remove(token:String,id_code:Number): Observable<any>{
  let url = this.APP_URL_CODE+'?token='+token+'&bloco=1&id='+id_code;
  return this.http.delete(url).map((resp:Response)=> resp.json());
}
code_create(token:String,name_code:String,link:String,t_conteudo:String): Observable<any>{
  var data = {
    code: name_code,
    link : link,
    t_conteudo : t_conteudo,
    token:token
  };
  let url = this.APP_URL_CODE;
  return this.http.post(url,data).map((resp:Response)=> resp.json());
}
get_API_IMG_URL(): String{
  return this.API_IMG_URL;
}
//edição de code 
getAllCode(token:String): Observable<any>{
   let url = this.APP_URL_CODE+'?token='+token;
   return this.http.get(url).map((resp:Response)=> resp.json());
}
getShowCode(code:String): Observable<any>{
   let url = this.API_URL+"?code="+code;
    return this.http.get(url).map((resp:Response)=> resp.json());
}
getLinks(page:any): Observable<any>{
    let url = this.APP_URL;
    return this.http.get(url).map((resp:Response)=> resp.json());
  }
  getCodePassword(password:String,id:Number){
    var data ={
      password : password,
      id : id,
      bloco :1,
    }
   let url = this.APP_URL_CODE;
   return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  code_Edit(token:String,id_code:Number,name_code:String,titulo?:String,descricao?:String,link?:String,isLink?:String,password?:String,isprivate?:Boolean): Observable<any>{
    var data = {
      id: id_code,
      bloco :1,
      token:token,
      code: name_code,
      titulo:titulo,
      descricao:descricao,
      link:link,
      t_conteudo:isLink,
      password   :password,
      isprivate  :isprivate
     
    };
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  contato_Edit(id_code:Number,token:String,pais?:String,tel_whatsapp?:String,tel_contato?:String,email?:String,website?:String,facebookUser?:String,instagramUser?:String,linkedin?:String): Observable<any>{
   console.log(id_code,token,pais,tel_whatsapp,tel_contato,email);
    var data = {
      id: id_code,
      bloco :1,
      token:token     ,   
      pais  :pais,
      tel_whatsapp :tel_whatsapp,
      tel_contato :tel_contato,
      email :email,
      website:website,
      facebookUser:facebookUser,
      instagramUser :instagramUser,
      linkedin:linkedin,
    };
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  ///mídias 
  imagen_create(id_code:Number,token:String,files:any[]): Observable<any>{
    var data ={
       id : id_code,
       bloco :3,
       token :token,
       files:JSON.stringify(files)
    }
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  imagen_delete(token:String,id_code:Number): Observable<any>{
    let url = this.APP_URL_CODE+'?token='+token+'&bloco=3&id='+id_code;
    return this.http.delete(url).map((resp:Response)=> resp.json());
  } 

  doc_create(id_code:Number,token:String,files:any[]): Observable<any>{
    var data ={
       id : id_code,
       bloco :4,
       token :token,
       files:JSON.stringify(files)
    }
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  doc_delete(token:String,id_code:Number): Observable<any>{
    let url = this.APP_URL_CODE+'?token='+token+'&bloco=4&id='+id_code;
    return this.http.delete(url).map((resp:Response)=> resp.json());
  } 

  video_create(id_code:Number,token:String,files:any[]): Observable<any>{
    var data ={
       id : id_code,
       bloco :5,
       token :token,
       files:JSON.stringify(files)
    }
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  
  video_create_ftp(id_code:Number,token:String,files:String): Observable<any>{
    var data ={
       id : id_code,
       bloco :8,
       token :token,
       files:files
    }
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  video_link_create(id_code:Number,token:String,files:String): Observable<any>{
    var data ={
       id : id_code,
       bloco :6,
       token :token,
       files:files
    }
    let url = this.APP_URL_CODE;
    return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
   video_delete(token:String,id_code:Number): Observable<any>{
    let url = this.APP_URL_CODE+'?token='+token+'&bloco=5&id='+id_code;
    return this.http.delete(url).map((resp:Response)=> resp.json());
  } 
  
  create_push(codeNumber:String,titulo:String,mensagem:String,token:String): Observable<any>{
    console.log(codeNumber,titulo,mensagem,token);
        var data ={
          codeNumber : codeNumber,
          titulo     : titulo,
          mensagem   : mensagem,
          token      : token,
          password   : "@spot2020"
         
        }
        console.log(data);
      let url = 'https://kscode.com.br/ksc_2020/wp-json/admin/v1/dashboard/';
      return this.http.post(url,data).map((resp:Response)=> resp.json());
  }
  
}