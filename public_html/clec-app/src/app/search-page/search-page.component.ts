import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre';
import { BdService } from 'src/app/services/bd.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  livresListe: Livre[] = []
  livresTrouver: Livre[] = []
  divChecker:Boolean = false;
  constructor(private bdService: BdService) {

    this.bdService.getData("livres.json");
    this.bdService.observable(this.bdService.filename);

    setTimeout(() => { 
      
      this.bdService.getData("livres.json");
      this.livresListe = this.bdService.getLivres();
    }, 200);
  }

  
  
  afficheMoi:boolean = false;
  ngOnInit(): void {
  }

  afficher(){
    this.afficheMoi = !this.afficheMoi;
  }

  chercherLivre(form: NgForm): void {
    this.divChecker = true;
    this.livresTrouver = [];
    if ( form.value.type === "categorie" ) {
      for (let i = 0; i < this.livresListe.length; i++) {
        if ( this.livresListe[i].nis == form.value.search ) {
          this.livresTrouver.push(this.livresListe[i]);
        }
      }
    } else if ( form.value.type === "titre" ) {
      for (let j = 0; j < this.livresListe.length; j++) {
        if ( this.livresListe[j].titre == form.value.search ) {
          this.livresTrouver.push(this.livresListe[j]);
        }
      }
    }
        
  }
  
  

}
