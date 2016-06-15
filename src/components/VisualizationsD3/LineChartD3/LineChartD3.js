import { default as React, PropTypes } from 'react';
import CuteButton from '../../CuteButton/CuteButton'

export default class LineChartD3 extends React.Component {
  addAxes(){
    let margin = {
            top: 30,
            right: 100,
            bottom: 30,
            left: 100
        },
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    let xScale = d3.scale.linear()
        .domain([d3.min(dataset, function(d) {
            return d.x;
        }), d3.max(dataset, function(d) {
            return d.x;
        })])
        .range([0, width]);

    let yScale = d3.scale.linear()
        .domain([0,1000000])
        .range([height, 0]);

    let xAxisFunction = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .innerTickSize(-height)
        .outerTickSize(0)
        .tickPadding(10)
        .ticks(33)
        .tickFormat(d3.format("d"));

    let yAxisFunction = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

      var svg = d3.select("#mySVG").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxisFunction)
                    .selectAll("text")
                    .attr("y", 0)
                    .attr("x", 9)
                    .attr("dy", ".35em")
                    .attr("transform", "translate(0,23), rotate(-45)");

      svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxisFunction);

  }

  componentDidMount(){
    this.addAxes()
      }

  render() {
    let { selectedCrop, selectedCounty, countyData } = this.props
    let margin = {
            top: 30,
            right: 100,
            bottom: 30,
            left: 100
        },
        width = 1000 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;


    let xScale = d3.scale.linear()
        .domain([d3.min(dataset, function(d) {
            return d.x;
        }), d3.max(dataset, function(d) {
            return d.x;
        })])
        .range([0, width]);

    let yScale = d3.scale.linear()
        .domain([0,1000000])
        .range([height, 0]);



    let axisNodes = dataset.map( (d, index) => {
      return(
          <g class="tick" transform="translate(${calculatedValue[{index]})" style="opacity: 1;">
                <line y2="-340" x2="0"></line>
                <text dy=".35em" y="0" x="9" transform="translate(0,23), rotate(-45)" style="text-anchor: middle;">
                    {d.x}
                </text>
          </g>
        )
    })

    let lineFunction = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) {
            return xScale(d.x);
        })
        .y(function(d) {
            return yScale(d.y);
        });

    let lineCalc = lineFunction(dataset)

    let areaFunction = d3.svg.area()
        .interpolate("cardinal")
        .x(function(d) {
            return xScale(d.x);
        })
        .y0(height)
        .y1(function(d) {
            return yScale(d.y);
        });

    let areaCalc = areaFunction(dataset)

    function showToolTip(thisKey) {
      console.log('showToolTip')
      document.getElementById(`tip${thisKey}`).style.opacity = '1'

        }
    function hideToolTip(thisKey) {
        document.getElementById(`tip${thisKey}`).style.opacity = '0'
      }

    let arrayOfThisKey = []
    let circleNodes = dataset.map( (d, index) => {
            let thisKey = parseInt(Date.now() + index)
            arrayOfThisKey.push(thisKey)
            let circleColor= "#D6CD1E"
            let cxCalc = xScale(d.x)
            let cyCalc = yScale(d.y)
            return(
              <circle cx={cxCalc} onMouseEnter={showToolTip.bind(this, thisKey)} onMouseLeave={hideToolTip.bind(this, thisKey)} key={thisKey} cy={cyCalc} fill={circleColor} r="6">
              </circle>

            )
    })

    let toolTipNodes = dataset.map((d, index) => {
      let leftPosition = xScale(d.x)
      let topPosition = yScale(d.y)
      return(
      <div key={"tip" + arrayOfThisKey[index]} class="d3-tip n" id={"tip" + arrayOfThisKey[index]}
                        style={{color: "white", fontWeight: "200", fontSize:"1.4em", background: "#D6CD1E",
                        border: "solid black 1px", padding: "15px", borderRadius: "80%", position: 'absolute',
                        opacity: '0', pointerEvents: 'none', minHeight: "10px", top: `${topPosition + 1900}px`, left: `${leftPosition + 200}px`}}>
        {d.y}
      </div>
      )
    })
    return (
      <div className="row text-center info-row">
        <CuteButton><h2>{selectedCrop} in {selectedCounty} is going nuts!</h2></CuteButton>
        <svg id="mySVG" className="line-chart" width={width + 150} height={height + 100}>
        <g transform="translate(100,30)">
          <rect width={width} height={height} fill="#f2f0df"></rect>
          <g className="y axis">
          </g>
          <g className="x axis">
          </g>
          <path className="line" d={lineCalc}></path>
          <path className="area" d={areaCalc}></path>
          {circleNodes}
        </g>
        </svg>
        {toolTipNodes}
      </div>

    )
  }
};

const dataset = [{
   x: 1976,
   y: 200000
}, {
   x: 1977,
   y: 328813
}, {
   x: 1978,
   y: 234986
}, {
   x: 1979,
   y: 443721
}, {
   x: 1980,
   y: 333666
}, {
   x: 1981,
   y: 202922
}, {
   x: 1982,
   y: 773729
}, {
   x: 1983,
   y: 909876
}, {
   x: 1984,
   y: 456789
}, {
   x: 1985,
   y: 238867
}, {
   x: 1986,
   y: 293847
}, {
   x: 1987,
   y: 483374
}, {
   x: 1988,
   y: 499922
}, {
   x: 1989,
   y: 335577
}, {
   x: 1990,
   y: 827364
}, {
   x: 1991,
   y: 882223
}, {
   x: 1992,
   y: 334455
}, {
   x: 1993,
   y: 772211
}, {
   x: 1994,
   y: 112255
}, {
   x: 1995,
   y: 437262
}, {
   x: 1996,
   y: 662522
}, {
   x: 1997,
   y: 445577
}, {
   x: 1998,
   y: 222277
}, {
   x: 1999,
   y: 683833
}, {
   x: 2000,
   y: 198762
}, {
   x: 2001,
   y: 334477
}, {
   x: 2002,
   y: 289977
}, {
   x: 2003,
   y: 445533
}, {
   x: 2004,
   y: 233456
}, {
   x: 2005,
   y: 128374
}, {
   x: 2006,
   y: 445587
}, {
   x: 2007,
   y: 737485
}, {
   x: 2008,
   y: 123433
}, {
   x: 2009,
   y: 556633
}, {
   x: 2010,
   y: 883736
}, {
   x: 2011,
   y: 593300
}, {
   x: 2012,
   y: 746382
}, {
   x: 2013,
   y: 773344
}, {
   x: 2014,
   y: 884466
}, {
   x: 2015,
   y: 337744
}, ];

/*
let circleNodes = dataset.map( (d, index) => {
        let thisKey = (Date.now + index)
        let showToolTip = () => {
            let tip = document.getElementById("tip" + thisKey)
            if (tip !== null){
              tip.style.display = 'block'
          }
        }
        let hideToolTip = () => {
            let tip = document.getElementById("tip" + thisKey)
            if (tip !== null){

            tip.style.display = 'none'

          }
        }

        let circleColor= "#D6CD1E"
        let cxCalc = xScale(d.x)
        let cyCalc = yScale(d.y)
        return(
          <div>
          <circle onmouseover={showToolTip()} onmouseleave={hideToolTip()} cx={cxCalc} key={thisKey} cy={cyCalc} fill={circleColor} r="6">
          </circle>
          <div key={"tip" + thisKey} class="d3-tip" style={{display: "none"}} id={"tip" + thisKey}>
            {d.y}
          </div>
          </div>
        )
})
*/
