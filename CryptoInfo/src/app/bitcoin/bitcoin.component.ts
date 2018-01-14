import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from './../bitcoin-data.service';
import { Chart } from 'chart.js';

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
  	this.btcData.clearData();
  	this.btcData.retrieveData();
  	this.btcData.retrieveMinuteData();
  	this.drawChart();
  }

  // draw trendline chart
  drawChart(){
	  // universal JS implement trend chart for all components
	  var trendContext = document.getElementById("trend-chart").getContext('2d');
	  var myTrendline = new Chart(trendContext, {
	    type: 'line',
	    data: {
	    	labels: this.btcData.secondsInLastHour,
	        datasets: [{
	            label: 'USD Price',
	            data: this.btcData.priceInLastHour,
	            backgroundColor: [
	                'rgb(255, 237, 198)'
	            ],
	            borderColor: [
	                'rgb(255, 177, 26)'
	            ],
	            borderWidth: 1,
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	               	  suggestedMin: 100000,
	                }
	            }]
	        },
	        elements: {
	        	point: {
	        		radius: 1.5
	        	}
	        },
	        legend: {
	        	onClick: function(){}
	        },
	    },
	  });

	  // fix graph not showing upon loading
	  setTimeout(function() { myTrendline.update(); },100);
  }
}
