import { Component } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent {
  cardStatus: boolean[] = [];

  cardContent = [
    {
      "date": "Maggio 2021",
      "title": "Semifinale a Firenze",
      "subtitle": "Gare",
      "content": "Il nostro progetto è stato organizzato in collaborazione con la Pinacoteca Galleria Estense di Modena. Lo scopo del robot è l'intrattenimento ludico educativo per i più piccoli e dare informazioni sul museo e i suoi reparti. Lo scopo è rendere accattivante il mondo dell'arte ai bambini attraverso l'interazione con NAO.",
      "image": "nao-1.jpg"
    },
    {
      "date": "Maggio 2021",
      "title": "Fiera di Roma",
      "subtitle": "Gare",
      "content": `Mattina: Nel corso della mattinata abbiamo perfezionato tutti i programmi necessari per le tre prove e abbiamo preparato il nostro campo gara. Di seguito abbiamo affrontato la prima prova, che consisteva nel presentare la nostra squadra nel modo più originale possibile. 
                  Pomeriggio: Nel pomeriggio abbiamo gareggiato nelle due prove successive: la prima consisteva in un percorso da far eseguire a NAO e la seconda nella realizzazione di un progetto per aiutare uno studente impossibilitato nel presentarsi a scuola.`,
      "image": "nao-2.jpg"
    },
    {
      "date": "Maggio 2021",
      "title": "Finale Zagarolo (ROMA)",
      "subtitle": "Gare",
      "content": "Il nostro progetto è stato organizzato in collaborazione con la Pinacoteca Galleria Estense di Modena. Lo scopo del robot è l'intrattenimento ludico educativo per i più piccoli e dare informazioni sul museo e i suoi reparti. Lo scopo è rendere accattivante il mondo dell'arte ai bambini attraverso l'interazione con NAO.",
      "image": "nao-1.jpg"
    },
    {
      "date": "Maggio 2021",
      "title": "Semifinale a distanza",
      "subtitle": "Gare",
      "content": "Il nostro progetto è stato organizzato in collaborazione con la Pinacoteca Galleria Estense di Modena. Lo scopo del robot è l'intrattenimento ludico educativo per i più piccoli e dare informazioni sul museo e i suoi reparti. Lo scopo è rendere accattivante il mondo dell'arte ai bambini attraverso l'interazione con NAO.",
      "image": "nao-2.jpg"
    }
  ]
}
