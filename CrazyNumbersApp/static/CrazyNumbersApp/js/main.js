
$(document).ready(function(){

	var userData = []

var userGet = $.ajax({
		url: 'http://localhost:8000/api/users/',
		type: 'GET',
		dataType: 'json',
		success: function(data){
		}
	})
})

