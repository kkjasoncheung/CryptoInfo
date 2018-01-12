import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from './../bitcoin-data.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor(private btcData:BitcoinDataService) { }

  btcPrices = {};

  ngOnInit() {
  	// get trading pair prices
  	this.btcData.retrieveData();
  }

}
