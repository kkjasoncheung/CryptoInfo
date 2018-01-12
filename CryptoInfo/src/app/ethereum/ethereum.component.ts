import { Component, OnInit } from '@angular/core';
import { EthereumDataService } from './../ethereum-data.service';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  constructor(private ethData:EthereumDataService) { }

  ngOnInit() {
  	// initially query for new ETH price
  	this.ethData.retrieveData();
  }

}
