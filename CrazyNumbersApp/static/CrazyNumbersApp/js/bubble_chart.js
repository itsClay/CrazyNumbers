InitChart();
function InitChart(){
        var vis = d3.select("#svgVisualize");
        var xRange = d3.scale.linear().range([40, 400]).domain([0,100]);
        var yRange = d3.scale.linear().range([40, 400]).domain([0,100]);
        var xAxis = d3.svg.axis().scale(xRange);
        var yAxis = d3.svg.axis().scale(yRange);
        vis.append("svg:g").call(xAxis);
        vis.append("svg:g").call(yAxis);
    }