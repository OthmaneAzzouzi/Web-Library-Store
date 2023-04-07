import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre';

import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  livresListe: Livre[] = []
  constructor(private bdService: BdService) { 

    this.bdService.getData("livres.json");
    this.bdService.observable(this.bdService.filename);
   
    setTimeout(() => { 
      
      this.bdService.getData("livres.json");
      this.livresListe = this.bdService.getLivres();
     
    }, 200);
  }

  

  ngOnInit(): void {
  }

}
