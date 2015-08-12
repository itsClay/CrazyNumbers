$(document).ready(function(){

	var userData = $.ajax({
		url: 'http://localhost:8000/api/users/',
		type: 'GET',
		dataType: 'json',
		success: function(data){
			console.log(data)
		}
	})

})