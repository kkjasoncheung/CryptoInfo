import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitcoinDataService {

  constructor(private http:HttpClient) { this.retrieveData(); }

  // API url to fetch btc data
  tradingPairs = {} ;
  priceInLastHour = [];
  secondsInLastHour = [];

  // clear data for new API request
  clearData() {
    this.tradingPairs = {};
    this.priceInLastHour = [];
    this.secondsInLastHour = [];
  }

  // method to retrieve data via http GET
  retrieveData() {
  	// test http client
  	this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=LTC,USD,ETH,BCH').subscribe(
  		(data) => {
        this.tradingPairs = data;
      }
  	);
  }

  // get price for every 1 minute in the last hour
  retrieveMinuteData(){
    var currency = 'USD';
    
    // query CryptoCompare API to get data
    this.http.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym='+ currency +'&limit=60&aggregate=3&e=CCCAGG').subscribe(
      (minuteData) => {
        // add each price to the priceInLastHour array
        for (var i=0; i<minuteData.Data.length; i++) {
          this.priceInLastHour.push(parseFloat(minuteData.Data[i].close));
          // convert into dates before pushing to array
          var tempDate = new Date(0);
          tempDate.setUTCSeconds(parseInt(minuteData.Data[i].time));
          this.secondsInLastHour.push(tempDate.toLocaleTimeString());
        }
      }
    );
    
  }
}
