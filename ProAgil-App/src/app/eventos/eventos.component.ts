import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      Tema: 'Angular',
      Local: 'Ribeirão Preto',
    },
    {
      EventoId: 2,
      Tema: '.Net Core',
      Local: 'São Paulo',
    },
    {
      EventoId: 3,
      Tema: '.Net Core e Angular',
      Local: 'Ribeirão Preto',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
