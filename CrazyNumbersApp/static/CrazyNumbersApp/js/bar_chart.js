$(document).ready(function(){

var data = [4, 8, 15, 16, 23, 42];

var userData2 = [
    {
        "User_id": 2,
        "Number": "415-279-5665",
        "DateTime_created": "2015-08-11T22:36:05Z"
    },
    {
        "User_id": 3,
        "Number": "555-555-5555",
        "DateTime_created": "2015-08-11T22:39:07Z"
    }
];

console.log(userData2.length)

// json call to our api in d3
var userData = d3.json('http://localhost:8000/api/users/')


// bar dimensions
var width = 500,
	barHeight = 20,
	barPadding = 1;

// set scalable data numbers to fit
var xRange = d3.scale.linear()
	.domain([0, d3.max(userData2)])
	.range([0, width]);

// dynamic chart size
var chart = d3.select('#barSVG')
	.attr('width', width)
	.attr('height', barHeight * userData2.length);

// create bars
var bar = chart.selectAll('g')
	.data(userData2.User_id)
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

})