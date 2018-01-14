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
  	this.ltcData.clearData();
  	this.ltcData.retrieveData();
  	this.ltcData.retrieveMinuteData();
  	this.drawChart();
  }


  // draw trendline chart
  drawChart(){
	  // universal JS implement trend chart for all components
	  var trendContext = document.getElementById("trend-chart").getContext('2d');
	  var myTrendline = new Chart(trendContext, {
	    type: 'line',
	    data: {
	    	labels: this.ltcData.secondsInLastHour,
	        datasets: [{
	            label: 'USD Price',
	            data: this.ltcData.priceInLastHour,
	            backgroundColor: [
	                'rgb(236, 236, 236)'
	            ],
	            borderColor: [
	                'rgb(181, 181, 181)'
	            ],
	            borderWidth: 1,
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	               	  suggestedMin: 250,
	                }
	            }]
	        },
	        elements: {
	        	point: {
	        		radius: 0
	        	}
	        },
	        legend: {
	        	onClick: function(){}
	        },
	    },
	  });

	  // fix graph not showing upon loading
	  setTimeout(function() { myTrendline.update(); },10);
  }

}
