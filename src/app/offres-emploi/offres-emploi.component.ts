import { Component } from '@angular/core';
import { Emploi } from '../model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})export 
class OffresEmploiComponent {
  listeEmploi: Emploi[] = [
    { reference: '1', titre: 'Développeur Angular', entreprise: 'ABC', etat: true },
    { reference: '2', titre: 'Designer UX/UI', entreprise: 'XYZ', etat: false },
    { reference: '3', titre: 'Ingénieur DevOps', entreprise: 'PQR', etat: true },
    { reference: '4', titre: 'Chef de Projet', entreprise: 'MNO', etat: false }
  ];
  rechercheTitre: string = '';
  rechercheEntreprise: string = '';
  rechercheEtat: string = '';
  listeEmploiFiltre: Emploi[] = [];
  afficherBilan: boolean = false;
  nbOffresNonCloturees: number = this.nombreOffresNonCloturees();

  nombreOffresNonCloturees(): number {
    return this.listeEmploi.filter(emp => emp.etat).length;
  }


  rechercher() {
    this.listeEmploiFiltre = this.listeEmploi.filter(emp => {
      // Filtre par titre
      if (this.rechercheTitre && !emp.titre.toLowerCase().includes(this.rechercheTitre.toLowerCase())) {
        return false;
      }
      // Filtre par entreprise
      if (this.rechercheEntreprise && !emp.entreprise.toLowerCase().includes(this.rechercheEntreprise.toLowerCase())) {
        return false;
      }
      // Filtre par état
      if (this.rechercheEtat && (emp.etat.toString() !== this.rechercheEtat)) {
        return false;
      }
      return true;
    });
  }

  afficherNbOffresNonCloturees() {
    this.afficherBilan = !this.afficherBilan;
    if (this.afficherBilan) {
      this.nbOffresNonCloturees = this.nombreOffresNonCloturees();
    } else {
      this.nbOffresNonCloturees = 0;
    }
  }
}
