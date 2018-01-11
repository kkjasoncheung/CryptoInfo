import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from './../bitcoin-data.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor(private btcData:BitcoinDataService) { }

  ngOnInit() {
  	this.btcData.retrieveData();
  }

}
