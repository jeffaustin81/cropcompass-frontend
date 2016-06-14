import { default as React, PropTypes } from 'react';

export default class DonutD3 extends React.Component{
  render(){
    var dataset = [{age: 65, population: 65000}, {age: 35, population: 35000}]
    var width = 960
    var height = 500
    var radius = Math.min(width, height) / 2;
    var svg = d3.select("organicDonut")
    var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);
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

      <div key={d.age + index}>
        <svg class="organicDonut" width={width} height={height}>
            <g transform="translate(480,250)">
              <g key={d.age + index} className="arc">
                    <path key={d+index} d={arcCalc} style={pathStyle}>
                    </path>
                    <image href="../../icons/crop-icons-yellow/hazelnut-yellow3x.png" width="220" height="220" x="-100" y="-110">
                    </image>
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
