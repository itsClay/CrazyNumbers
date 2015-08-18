// BAR CHART CREATION
var barChartInit = function(){
	// bar dimensions
	var width = 500,
		barHeight = 20,
		barPadding = 1;

	// set scalable data numbers to fit
	var xRange = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range([0, width]);

	// dynamic chart size
	var chart = d3.select('#barSVG')
		.attr('width', width)
		.attr('height', barHeight * data.length);

	// create bars
	var bar = chart.selectAll('g')
		.data(data)
		.enter().append('g')
		.attr('transform', function(d, i){
			return "translate(0," + i * barHeight + ")"
		});

	bar.append('rect')
		.attr('width', xRange)
		.attr('height', barHeight - 1);


	bar.append('text')
		.attr('x', function(d){
			return xRange(d) - 3;
		})
		.attr('y', barHeight / 2)
		.attr('dy', '.35em')
		.text(function(d){
			return d;
		});

	// ensure d is a number
	function type(d) {
		d.value = +d.value;
		return d;
	}
};

