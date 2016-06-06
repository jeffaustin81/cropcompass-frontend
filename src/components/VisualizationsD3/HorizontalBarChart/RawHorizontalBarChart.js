var node = document.createElement('div');

      var width = 1000;
      var height = 500;
      var countyName = "Multnomah"
      d3.json("http://api.cropcompass.org/data/nass_commodity_area?region=" + countyName, function(d) {
          d.data.sort(function(a, b) {
              return b.acres - a.acres;
          });
          var dataset = [d.data[1], d.data[2], d.data[3], d.data[4], d.data[5]];

          var xScale = d3.scale.linear()
              .domain([0, d3.max(dataset, function(d){
      			return d.acres;
      		})])
              .range([0, width]);

      		var colorScale = d3.scale.ordinal()
      		.range(["#5EAA00", "#87B725", "#A1C02A", "#BCCA30", "#E1D837"]);

          d3.select(node)
              .selectAll("div")
              .data(dataset)
              .enter()
      		.append("div")
      		.style("border-radius", "3px")
      		.style("height", "20px")
      		.style("width", function(d) {
      			console.log(d.acres);
                  return xScale(d.acres) + "px";
              })
      		.style("background-color", function(d) {
      			return colorScale(d.acres);
      		})
              .text(function(d) {
                  return d.commodity;
              });
      })

export default node
