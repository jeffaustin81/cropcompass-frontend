import { default as React, PropTypes } from 'react';
import rd3 from 'react-d3-library';
import node from './RawHorizontalBarChart';
const RD3Component = rd3.Component;

export default class HorizontalBarChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div className="col-md-12 horizontal-bar-chart">
        <RD3Component data={this.state.d3}/>
      </div>
    )
  }
};
