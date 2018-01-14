import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LitecoinDataService {

  constructor(private http:HttpClient) { }

  tradingPairs = {};

  retrieveData() {
  	// get pricing info for LTC from CryptoCompare
  	this.http.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=ETH,USD,BTC,BCH').subscribe(
  		(data) => {
  			this.tradingPairs = data;
  		}
  	);
  }
}
