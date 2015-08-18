// BAR CHART 2 CREATION
var barChart2Init = function(userdata){
	// BAR DIMENSIONS
	var margin = {top: 20, right: 30, bottom: 30, left: 40},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	// setting an ordinal x scale since it will not be a number value but a string
	var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
			.range([height, 0]);

	// AXIS 
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom')

	var yAxis = d3.svg.axis()
		.scale(x)
		.orient('left')
		.ticks(10, '%');

	// CHART
	var svg = d3.select('#bar_chart2').append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	// need to re-work the domain
	x.domain(userdata);
	y.domain([0, d3.max(userdata, function(d){return d})]); // check back - think this needs to be phone number frequency

	svg.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0, ' + height + ')')
		.call(xAxis);

	svg.append('g')
		.attr('class', 'y axis')
		.call(yAxis)
	  .append('text')
	  	.attr('transform', 'rotate(-90)')
	  	.attr('y', 6)
	  	.attr('dy', '.71em')
	  	.style('text-anchor', 'end')
	  	.text('yAxis')



	function type(d) {
		d.frequency = +d.frequency; //coerce to number
		return d;
	};

};