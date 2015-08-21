// BAR CHART 2 CREATION
var barChart2Init = function(userdata){
	// BAR DIMENSIONS
	var margin = {top: 20, right: 30, bottom: 30, left: 40},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	// setting an ordinal x scale since it will not be a number but a string
	var x = d3.scale.linear()
			.range([0, width]);

	var y = d3.scale.linear()
			.range([height, 0]);

	// AXIS 
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom')

	var yAxis = d3.svg.axis()
		.scale(y)
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

  	var bar = svg.selectAll("g")
  	    .data(userdata)
  	  .enter().append("g")
  	    .attr("transform", function(d) { return "translate(" + x(d) + ",0)"; });

  	bar.append("rect")
  	    .attr("y", function(d) { return y(d); })
  	    .attr("height", function(d) { return height - y(d); })
  	    .attr("width", x);

  	bar.append("text")
  	    .attr("x", x / 2)
  	    .attr("y", function(d) { return y(d) + 3; })
  	    .attr("dy", ".75em")
  	    .text(function(d) { return d; });

	function type(d) {
		d = +d; //coerce to number
		return d;
	};

};