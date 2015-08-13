$(document).ready(function(){

// pull in user data from api
var userData = {}
var userGet = $.ajax({
	url: 'http://localhost:8000/api/users/',
	type: 'GET',
	dataType: 'json',
	success: function(data){
		userData = data
	}
})

// need to create an x and y object for d3 to consume
var sampleData = [{
	'x':1,
	'y':2
},{	
	'x':4,
	'y':5
},{	
	'x':6,
	'y':9
},{
	'x':12,
	'y':14
}];

// Chart creation for Bubble Chart
InitChart();
	function InitChart(){
	        var vis = d3.select("#svgVisualize");
	        var xRange = d3.scale.linear().range([40, 400]).domain([d3.min(sampleData, function (d) {
	                            return (d.x);
	                        }),
	                        d3.max(sampleData, function (d) {
	                            return d.x;
	                        })]);
	        var yRange = d3.scale.linear().range([400, 40]).domain([d3.min(sampleData, function (d) {
	                            return d.y;
	                        }),
	                        d3.max(sampleData, function (d) {
	                            return d.y;
	                        })]);
	        var xAxis = d3.svg.axis().scale(xRange);
	        var yAxis = d3.svg.axis().scale(yRange).orient("left");
	        vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
	        vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
	        var circles = vis.selectAll("circle").data(sampleData);
	    circles
	        .enter()
	        .insert("circle")
	        .attr("cx", function (d) { return xRange (d.x); })
	        .attr("cy", function (d) { return yRange (d.y); })
	        .attr("r", 10)
	        .style("fill", "red");
	}
})