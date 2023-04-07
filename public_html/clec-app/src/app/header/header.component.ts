import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalPanier:number = 0;
  //Icones 
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  constructor(private panierS: PanierService) { }

  ngOnInit(): void {
    
  }

  updatePanier():number {
    return this.panierS.totalLivre;
  };


  

}
