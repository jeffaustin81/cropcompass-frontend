import { default as React, PropTypes } from 'react';

export default class DonutD3uuuuuuuuuuuuuuuuuuuuuuu extends React.Component{
  componentDidMount(){
    var dataset = [{age: 65, population: 65000}, {age: 35, population: 3500}]
    var width = 960,
      height = 500,
      radius = Math.min(width, height) / 2;
    var color = d3.scale.ordinal()
      // will need to change dataset to receive values and display them dynamically
      .range(["rgb(82,59,3)", "rgb(222,222,206)"]);
    var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);
    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.population;
      });
    var svg = d3.select(".organicDonut").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      var g = svg.selectAll(".arc")
        .data(pie(dataset))
        .enter().append("g")
        .attr("class", "arc");
      g.append("path")
        .attr("d", arc)
        .style("fill", function(d) {
          return color(d.data.age);
        });
      // g.append("text")
      // 	.attr("transform", function(d) {
      // 		return "translate(" + arc.centroid(d) + ")";
      // 	})
      // 	.attr("dy", ".35em")
      // 	.text(function(d) {
      // 		return d.data.age;
      // 	});
      // DANNY!!! THIS IS DIFFERENT!!!
      g.append("svg:image")
        .attr("xlink:href", "../../icons/leaf-brown3x.png")
        .attr("width", "220")
        .attr("height", "220")
        .attr("x", "-100")
        .attr("y", "-110");
        // .attr("x", width/2)
        // .attr("y", height/2);
    ;
    function type(d) {
      d.population = +d.population;
      return d;
    }


}


  render(){
    var dataset = [{age: 65, population: 65000}, {age: 35, population: 3500}]

      let dataWords = dataset.map( (d, index) => {
        return (<div key={d.age+d.population}> age: {d.age}, population: {d.population}</div>)
      })
    let donutType = "organicDonut"
    return(
      <div>
      <div className={donutType}>

      </div>
      {dataWords}
      </div>
    )
  }
}


/*
var width = 960,
  height = 500,
  radius = Math.min(width, height) / 2;

  var svg = d3.select("organicDonut")
  var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);
    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.population;
      });

var dataset = [{age: 65, population: 65000}, {age: 35, population: 3500}]
let colorValues = ["rgb(82,59,3)", "rgb(222,222,206)"]

let arcNodes = dataset.map( (d, index) => {
  let pathStyle = {fill: colorValues[index]}
  return (
    <g class="arc">
          <path d={arc(dataset)} style={pathStyle}>
          </path>
          <image href="../../icons/crop-icons-yellow/hazelnut-yellow3x.png" width="220" height="220" x="-100" y="-110">
          </image>
          new stuff here
    </g>
  )
})
let circleNodes = dataset.map( (d, index) => {
  return (

    <div>
      <svg class="organicDonut" key={d.age + index} width={width} height={height}>
          <g transform="translate(480,250)">
              {arcNodes}
          </g>
      </svg>
    </div>




  )
})

let donutType = "organicDonut"
return(
  <div className={donutType}>o hi

  {circleNodes}

  </div>
)
}
*/
