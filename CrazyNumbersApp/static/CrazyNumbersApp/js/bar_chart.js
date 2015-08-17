$(document).ready(function(){

// Arbitrary Data for trials
// var data = [4, 8, 15, 16, 23, 42];

// create variable for storage of our data
var userData = {},
	userIDs = [],
	userPhoneNumbers = [],
	userDomain;

// json call to our api
var getUserdata = function(){	
	return $.ajax({
		url: 'http://localhost:8000/api/users/',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			assignUserdata(data);
		}
	})
};
// callback to handle our result
var assignUserdata = function(data){
	userData = data
	console.log(data)

	var userNumbers = function(data){
		for(var key in data){
			userIDs.push(data[parseInt(key)]['User_id']);
			userPhoneNumbers.push(data[parseInt(key)]['Number']);
		};
	};
	userNumbers(data);
	// convert phone numbers into iterable numbers
	// I want to keep the string formatted data around though for user display purposes.
	function phoneValuation(phonelist){
		for(var phone in phonelist){
			return phonelist[phone] = phone.slice(0,3)+phone.slice(4,7)+phone.slice(8,12)
		}
	}; // DO WE NEED THIS FOR GRAPHING?

	phoneValuation(userPhoneNumbers)
	console.log(userIDs)
	console.log(userPhoneNumbers)

	userDomain = d3.max(userIDs)
	console.log(userDomain)

	barChartInit()
};
// execute
getUserdata()
// SET OUR DATA VARIABLE TO THE USER IDS
data = userIDs

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

})