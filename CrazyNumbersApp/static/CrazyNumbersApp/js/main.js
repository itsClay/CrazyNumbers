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

	console.log(userIDs);
	console.log(userPhoneNumbers);

	barChartInit();
	barChart2Init();
	// bubbleChartInit();
};
// execute
getUserdata()
// SET OUR DATA VARIABLE TO THE USER IDS
data = userIDs

});