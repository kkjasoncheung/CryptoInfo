import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitcoinDataService {

  constructor(private http:HttpClient) { }

  // url to fetch crypto data from API
  URL:string = '';

  // method to retrieve data via http GET
  retrieveData() {
  	// test http client
  	this.http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe(
  		data => console.log(data);
  	);
  }
}
