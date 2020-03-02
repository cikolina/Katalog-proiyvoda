import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostalo',
  templateUrl: './ostalo.component.html',
  styleUrls: ['./ostalo.component.css']
})
export class OstaloComponent implements OnInit {

  constructor() { }

  cards:any;

  ngOnInit() {
    this.cards = [
      {name: 'Master Card', imageUrl:'https://www.unicreditbank-bl.ba/content/dam/cee2020-pws-bh2/Kartice/MasterCard%20Business.png',
       description:'Master Card Business je nova kreditna kartica prilagođena zahtjevima poslovnih korisnika. Omogućava sigurnije, brže i efikasnije poslovanje i ima niz mogućnosti za kupovinu kako u inostranstvu tako i u zemlji.Posebna osobina je beskamatno plaćanje u inostranstu.'},
      {name: 'Visa Business', imageUrl:'https://www.unicredit.ba/content/dam/cee2020-pws-bh1/cards/Visa_Business_Electron.png',
       description:'Jednostavno i sigurno raspolaganje sredstvima transakcionog računa,bez prostornih i vremenskih ograničenja,putem POS terminala ili bankomata širom svijeta. Omogućava pristup brz i jednostavan pristup novcu ,bez obzira gdje se on nalazio.'},
      {name: 'POS uređaji', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXYhGiVTWXDXf-WHmlvbx7juLlhI6aphPmuvlYt6_Hx_BYRI2',
       description:'UniCredit Bank Banja Luka ima mogućnost ugovaranja prihvatanja kartica kao sredstva plaćanja na prodajnim mjestima ugovornih partnera. Svakom ugovornom partneru za prihvatanje platnih kartica, Banka osigurava POS terminale.'},
  ];
  }

}
