<template>
    <div class="map">
      <div class="mapDetails">
        <p class ="mapInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="https://planthardiness.ars.usda.gov/" target="_blank" id="external">
          Learn more about hardiness zones in the United States &#8594;
        </a>
      </div>
      <div id="mapArea">
      </div>
    </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: 'hmap',
}


// var width = 960,
//     height = 500;

// var color = d3.scale.linear()
//     .domain([-35, 0, 35])
//     .range(["#4575b4", "#ffffbf", "#a50026"])
//     .interpolate(d3.interpolateHcl);

// var x = d3.scale.linear()
//     .domain([-40, 40])
//     .range([0, 240]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//     .tickSize(13)
//     .tickFormat(d3.format("+.0f"));

// var canvas = d3.select("hardyMap").append("canvas")
//     .attr("width", width)
//     .attr("height", height);

// var context = canvas.node().getContext("2d");

// var path = d3.geo.path()
//     .projection(null)
//     .context(context);

// var svg = d3.select("hardyMap").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("class", "key")
//   .append("g")
//     .attr("transform", "translate(60," + (height - 60) + ")");

// svg.selectAll("rect")
//     .data(pair(x.ticks(10)))
//   .enter().append("rect")
//     .attr("height", 8)
//     .attr("x", function(d) { return x(d[0]); })
//     .attr("width", function(d) { return x(d[1]) - x(d[0]); })
//     .style("fill", function(d) { return color(d[0]); });

// svg.call(xAxis).append("text")
//     .attr("class", "caption")
//     .attr("y", -6)
//     .text("Avg. annual extreme minimum temperature, °F");

// d3.json("../../assets/data/map.json", function(error, ophz) {
//   if (error) throw error;

//   topojson.feature(ophz, ophz.objects.b)
//       .features
//       .sort(function(a, b) { return a.t - b.t; })
//       .forEach(render);
// });

// function pair(array) {
//   return array.slice(1).map(function(b, i) {
//     return [array[i], b];
//   });
// }

// function render(d) {
//   var t = d.properties.t;
//   if (t <= -98) return;
//   context.fillStyle = color(t);
//   context.beginPath();
//   path(d);
//   context.fill();
// }

</script>

<style>
  .map {
    background-color: #F7F7F7;
    height: 500px;
    width: 100%;
    z-index: 2;
  }

  .mapDetails {
    color: #333;
    padding: 1rem;
    width: 20%;
    z-index: 1;
  }

  #external {
    color: #3D7068;
  }

  a#external:hover {
    color: #70D31C;
  }

</style>