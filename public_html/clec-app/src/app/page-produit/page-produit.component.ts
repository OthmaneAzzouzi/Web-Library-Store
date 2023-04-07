import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre';
import { BdService } from '../services/bd.service';

import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../services/messenger.service';
import { PanierService } from '../services/panier.service';
@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent implements OnInit {

  paramQuery: any = "";
  livres: Livre[] = []
  constructor( private activatedRoute: ActivatedRoute, private bdService: BdService, private msg: MessengerService, private panierS: PanierService ) { 
    this.activatedRoute.params.subscribe(dataI => {
      this.paramQuery = dataI['id'];

    this.bdService.getData("livres.json");
    this.bdService.observable(this.bdService.filename);
   
    setTimeout(() => { 
      
      this.bdService.getData("livres.json");
      this.livres = this.bdService.getLivres();
    
     
    }, 200);
    });
  }

  ngOnInit(): void {
  
  }

  handleAddToCart() {
    this.msg.sendMsg(this.livres[this.paramQuery]);
    this.panierS.addLivre(this.livres[this.paramQuery]);
    this.panierS.totalLivre ++;
  }

}
