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
      <svg ref="svg" height="300" width="500">
        <path
          v-for="state in stateData"
          :key="state.feature.id"
          :d="pathGenerator(state.feature)"
          :style="{
            fill: state.color,
            stroke: 'darkslategray'
          }"/>
        </svg>
      </div>
    </div>
</template>

<script>

export default {
  name: 'hmap',
}

 computed: {
    // Typical projection for showing all states scaled and positioned appropriately
    projection () {
      return d3.geoAlbersUsa().scale(600).translate([250, 150])
    },

    // Function for converting GPS coordinates into path coordinates
    pathGenerator () {
      return d3.geoPath().projection(this.projection)
    },

    // Combine the states GeoJSON with a rank-based gradient
    stateData () {
      return this.statesJson ? this.statesJson.features.map(feature => {
        let state = this.happiestStates.find(state => state.state === feature.id)
        return {
          feature,
          color: this.stateColor(state.rank)
        }
      }) : []
    },

    // On creation, get the GeoJSON
  created () {
    axios.get('https://api.github.com/gists/e0d1b7950ced31369c903bed0cead7b1')
      .then(response => {
      this.statesJson = JSON.parse(response.data.files['us_features.json'].content)
    })
      .catch(error => {
      console.log(error)
    })
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