import { Component, OnInit } from '@angular/core';
import { Livre} from '../entite/Livre';

@Component({
  selector: 'app-produit-acceuil',
  templateUrl: './produit-acceuil.component.html',
  styleUrls: ['./produit-acceuil.component.css']
})
export class ProduitAcceuilComponent implements OnInit {

  livresAcceuil:Array<Livre> = new Array<Livre>();
  photoLink:string = '../../assets/images-livres/';

  constructor() { 
      this.livresAcceuil.push({titre:"L'étranger",auteur:"Albert Camus",prix:12.99,srcPhoto:""});
      this.livresAcceuil.push({titre:"Germinal",auteur:"Victor Hugo",prix:14.99,srcPhoto:""});
      this.livresAcceuil.push({titre:"1984",auteur:"George Orwell",prix:16.99,srcPhoto:""});
  }

  ngOnInit(): void {

  }

}
