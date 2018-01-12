import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitcoinDataService {

  constructor(private http:HttpClient) { this.retrieveData(); }

  // API url to fetch btc data
  tradingPairs = {} ;

  // method to retrieve data via http GET
  retrieveData() {
  	// test http client
  	this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=LTC,USD,ETH,BCH').subscribe(
  		(data) => {
        this.tradingPairs = data;
      }
  	);
  }
}
