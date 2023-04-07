import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';


interface Data {
  file: String;
  data: String;
 
}
@Injectable({
  providedIn: 'root'
})
export class BdService {

  lstlivres:any[] = []
  lstPanier:any[] = []
  lstData:any[] = []
  lstSearch:any[]= []
  jsonData:any[]= []
  filename:string = "";
  ImageBaseData:string | ArrayBuffer = "";

  constructor(private http: HttpClient) { }

  
  observable(filename:string) {
    return this.http.get<any[]>("http://localhost:3000/getjson?f=/public_html/clec-app/src/assets/data/" + filename).subscribe((data) => { this.jsonData = data})
  }


  getData(filename:string):any[] {
    this.filename = filename;

    return this.jsonData;
  }

  
  postData() {
    const body = {file: "../cc.json", data: "dfsdf"};
    return this.http.post("http://localhost:3000/postjson", body);
  }

  updateLivres() {
    this.lstlivres = this.getData("livres.json");
  }

  getLivres():any[] {
     this.updateLivres();
     
     return this.lstlivres;
  }

  getPanier():any[] {
    let jsonPanier:any[] = []
    for (let i = 0; i < this.jsonData.length; ++i) {
      for (let j = 0; j < this.lstPanier.length; j++) {
        if ( this.jsonData[i].cpr === this.lstPanier[j].cpr) {
          jsonPanier.push(this.jsonData[i]);
        }
      }
    }
  return jsonPanier;
  }

  //Images Upload Section
  handleFileInput(imageInput: any) {
    let me = this;
    let file = imageInput.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      if( reader.result != null)
      me.ImageBaseData=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  btnUpload(){
    
    if(this.ImageBaseData==null){
      alert("Veuillez sélectionner un fichier");
    }else{     
      var fileUplodVM: FileUplodVM={
        ImageBaseData:this.ImageBaseData.toString()
      }
      let test:String = <String>fileUplodVM.ImageBaseData;
      this.CreateItem(test.toString()).subscribe((res: any) =>{ 
        if(res){
          alert("Fichier importé avec succes");
        }else{
          alert("Échec du téléchargement du fichier");
        }
        
      },
      error => {
        alert(error.message);
      });
    }
  }
  
  public CreateItem(base64Data: string) {

    let dataR:Data = {
      file: "/public_html/cc.json",
      data: `[{"name": "img1", "base64": "` + base64Data + `"}]`
    }

    
   return this.http.post(`http://localhost:3000/postjson`, dataR)
    .pipe(
      map((res: any) => {
        console.log(res);
        return res;
      }));
  }
  
}


export class FileUplodVM{
  ImageBaseData: string | undefined;
}