import { default as React, PropTypes } from 'react';
import { connect } from 'react-redux'

export default class HorizontalBarChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {countyName: ""}
                }

    componentWillReceiveProps(nextProps){
      this.setState({countyName: nextProps.countyName})
    }

  render() {
    let width = this.props.width || 350;
    let height = (width * .66);
    let xMetric = this.props.xMetric
    let { putCountyDataInState } = this.props
    let colorScale = ["#5EAA00", "#87B725", "#A1C02A", "#BCCA30", "#E1D837"]
        let dataset = this.props.countyData.slice(0,6)
        let xScale = d3.scale.linear().domain([0, d3.max(dataset, function(d){return d[xMetric];})]).range([0, width])
        let widthArray = dataset.map(function(d) {
                      return xScale(d[xMetric]);
                       })
        let lessThanFive = ""
        if (dataset.length < 5 && dataset.length > 0) { lessThanFive = `There are only ${dataset.length} data points in this query.`}
        if (dataset.length === 0) { lessThanFive = 'There is no data available for this query.'}

        let barNodes = dataset.map(function(d, index){
              return(
                <div key={Date.now() + index}>
                  <div style={{borderRadius: "3px",  height: "20px", width: `${widthArray[index]}px`,
                    backgroundColor: `${colorScale[index]}`}}>
                 </div>
                  {d.commodity} - {d[xMetric]}
               </div>
                 )
              })
    return (
      <div className="horizontal-bar-chart">
        <h2>{this.props.chartTitle}</h2>
        <div className={this.props.chartTitle}>
        {barNodes}
        {lessThanFive}
        </div>

      </div>
    )
  }
};

/*

const mapStateToProps = (state) => {
	    return {
        countyData: state.countyData,
        }
}

const putCountyDataInState = (countyData) => {
	return {type:"ADD_COUNTY_DATA", payload: countyData }
}

const mapDispatchToProps = (dispatch) => {
  return {putCountyDataInState: (countyData) => dispatch(putCountyDataInState(countyData))}
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalBarChart)*/
