import { Component, OnInit } from '@angular/core';
import { LitecoinDataService } from './../litecoin-data.service';

@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.component.html',
  styleUrls: ['./litecoin.component.css']
})
export class LitecoinComponent implements OnInit {

  constructor(private ltcData:LitecoinDataService) { }

  ngOnInit() {
  	this.ltcData.retrieveData();
  }

}
