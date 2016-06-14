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
    console.info('bar chart render with this county::' + this.state.countyName)
    let width = 600;
    let height = 400;
    let { putCountyDataInState } = this.props
    let colorScale = ["#5EAA00", "#87B725", "#A1C02A", "#BCCA30", "#E1D837"]
        let dataset = this.props.countyData.slice(1,6)
        let xScale = d3.scale.linear().domain([0, d3.max(dataset, function(d){return d.acres;})]).range([0, width])
        let widthArray = dataset.map(function(d) {
                      return xScale(d.acres);
                       })
        let barNodes = dataset.map(function(d, index){
              return(
                <div key={Date.now() + index} style={{borderRadius: "3px", height: "20px", width: `${widthArray[index]}px`,
                  backgroundColor: `${colorScale[index]}`}}>
                      {d.commodity}
               </div>
                 )
              })
    return (
      <div className="col-md-12 horizontal-bar-chart">
        <h2>{this.props.countyName} county info:</h2>
        <div className={this.props.chartTitle}>
        {barNodes}
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
