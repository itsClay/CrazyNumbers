// BAR CHART 2 CREATION
var barChart2Init = function(){
	// BAR DIMENSIONS
	var margin = {top: 20, right: 30, bottom: 30, left: 40},
		width = 500 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	// setting an ordinal x scale since it will not be a number value but a string
	var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
			.range([height, 0]);

	// AXIS 
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom');

	var yAxis = d3.svg.axis()
		.scale(x)
		.orient('left');

	// CHART
	var chart = d3.select('#bar2SVG')
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	// need to re-work the domain
	// x.domain(data.map(function(d) {return d.name; }));
	// y.domain([0, d3.max(userIDs)]); // check back - think this needs to be phone number frequency

	chart.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0, ' + height + ')')
		.call(xAxis);

	chart.append('g')
		.attr('class', 'y axis')
		.call(yAxis);

	var barWidth = width / userPhoneNumbers.length;

	// re-useable bar creation
	var bar = chart.selectAll('g')
		.data(data)
		.enter().append('g')
		.attr('transform', function(d, i){ return 'translate(' + i * barWidth + ', 0'; });
	// setting each bar size
	bar.append('rect')
		.attr('y', function(d){ return y(d.value); })
		.attr('height', function(d){ return height - y(d.value); })
		.attr('width', barWidth - 1);
	// set the bar text
	bar.append('text')
		.attr('x', barWidth / 2)
		.attr('y', function(d) { return y(d.value) + 3; })
		.attr('dy', '.75em')
		.text(function(d) { return d.value; });

	function type(d) {
		d.frequency = +d.frequency; //coerce to number
		return d;
	};

};