import { Injectable } from '@angular/core';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  livres: Livre[] = []
  totalLivre: number = 0;
  constructor() { }

  addLivre(livreR: Livre) {
    this.livres.push(livreR)
  }

}
