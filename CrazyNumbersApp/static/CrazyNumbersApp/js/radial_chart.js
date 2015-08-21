var div1 = d3.select(document.getElementById('radial_progress'));

var radialProgressInit = function(userdata){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("PROGRESS")
        .diameter(150)
        .value(78)
        .render();
}