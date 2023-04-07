import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre';
import { MessengerService } from 'src/app/services/messenger.service';
import { PanierService } from 'src/app/services/panier.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() livreItem: Livre = new Livre(0,15879799, "Olivia Meza", "Book #0", 15.0, 30, "N/A", "maternelle", "ebook", "default-img.jpg");


  constructor(private msg: MessengerService, private panierS: PanierService) { 
 
  }

  ngOnInit(): void {
    
      
    
  }

  handleAddToCart() {
    this.msg.sendMsg(this.livreItem);
    this.panierS.addLivre(this.livreItem);
    this.panierS.totalLivre ++;
  }

}
