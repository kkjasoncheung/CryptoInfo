import { Component, OnInit } from '@angular/core';
import { EthereumDataService } from './../ethereum-data.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  constructor(private ethData:EthereumDataService) { }

  ngOnInit() {
  	// initially query for new ETH price
  	this.ethData.clearData();
  	this.ethData.retrieveData();
  	this.ethData.retrieveMinuteData();
  	this.drawChart();
  }

   // draw trendline chart
  drawChart(){
	  // universal JS implement trend chart for all components
	  var trendContext = document.getElementById("trend-chart").getContext('2d');
	  var myTrendline = new Chart(trendContext, {
	    type: 'line',
	    data: {
	    	labels: this.ethData.secondsInLastHour,
	        datasets: [{
	            label: 'USD Price',
	            data: this.ethData.priceInLastHour,
	            backgroundColor: [
	                'rgb(228, 231, 242)'
	            ],
	            borderColor: [
	                'rgb(110, 124, 186)'
	            ],
	            borderWidth: 1,
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	               	  suggestedMin: 100000
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
