import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EthereumDataService {

  constructor(private http:HttpClient) { }

  tradingPairs = {};

  retrieveData() {
  	// get pricing info for ETH from CryptoCompare
  	this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=LTC,USD,BTC,BCH').subscribe(
  		(data) => {
  			this.tradingPairs = data;
  		}
  	);
  }

}
