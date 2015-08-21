// Chart creation for Bubble Chart

function bubbleChartInit(){
        var vis = d3.select("#svgVisualize");
        var xRange = d3.scale.linear().range([0, 400])
        			.domain(0, d3.max(data)
                    );
        var yRange = d3.scale.linear().range([400, 40]).domain([d3.min(userPhoneNumbers, function (d) {
                            return d.y;
                        }),
                        d3.max(userPhoneNumbers, function (d) {
                            return d.y;
                        })]);
        var xAxis = d3.svg.axis().scale(xRange);
        var yAxis = d3.svg.axis().scale(yRange).orient("left");
        vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
        vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
        var circles = vis.selectAll("circle").data(sampleData);
    circles
        .enter()
        .insert("circle")
        .attr("cx", function (d) { return xRange (d.x); })
        .attr("cy", function (d) { return yRange (d.y); })
        .attr("r", 10)
        .style("fill", "red");
}
