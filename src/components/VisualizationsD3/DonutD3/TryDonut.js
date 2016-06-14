import { default as React, PropTypes } from 'react';

export default class DonutD3 extends React.Component{
  render(){
    var dataset = [{age: 65, population: 65000}, {age: 35, population: 35000}]
    var width = 1000
    var height = 500
    var radius = Math.min(width, height) / 2;
    var svg = d3.select("organicDonut")
    var arc = d3.svg.arc()
      .outerRadius(radius - (height * .03))
      .innerRadius(radius - (height * .17));
      var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) {
          return d.population;
        });

  let circleNodes = pie(dataset).map( (d, index) => {
    let arcCalc = arc(d)
    let colorValues = ["rgb(82,59,3)", "rgb(222,222,206)"]
    let pathStyle = {fill: colorValues[index]}

    return (

      <div key={d.age + index} style={{textAlign: "center"}}>
      <img src="../../icons/leaf-brown3x.png" style={{position: "absolute", left: "47%", top: "37%", zIndex:"2"}} width={width * .23} height={height * .44}>
      </img>
        <svg class="organicDonut" width={width} height={height}>
            <g transform="translate(480,250)">
              <g key={d.age + index} className="arc">
                    <path key={d+index} d={arcCalc} style={pathStyle}>
                    </path>
              </g>
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
}
