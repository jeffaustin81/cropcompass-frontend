import { default as React, PropTypes } from 'react';

export default class LineChartD3 extends React.Component {
  render() {
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

/*
    let axisNodes = dataset.map( (d, index) => {
      return(
          <g class="tick" transform=`translate(${calculatedValue[{index]})` style="opacity: 1;">
                <line y2="-340" x2="0"></line>
                <text dy=".35em" y="0" x="9" transform="translate(0,23), rotate(-45)" style="text-anchor: middle;">
                    {d.x}
                </text>
          </g>
        )
    })
*/
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


    let circleNodes = dataset.map( (d, index) => {
            let cxCalc = xScale(d.x)
            let cyCalc = yScale(d.y)
            return(
              <circle cx={cxCalc} key={Date.now + index} cy={cyCalc} r="6"></circle>
            )
    })


    return (
      <div className="col-md-12 line-chart-box">
        <h2>Line Chart!</h2>
        <svg className="line-chart" width="1000" height="400">
        <g transform="translate(100,30)">
          <rect width="800" height="400" fill="#f2f0df"></rect>
          <g className="y axis">
          </g>
          <g className="x axis">
          </g>
          <path className="line" d={lineCalc}></path>
          <path className="area" d={areaCalc}></path>
          {circleNodes}
        </g>
        </svg>

      </div>

    )
  }
};
