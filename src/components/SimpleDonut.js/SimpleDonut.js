import { default as React, PropTypes } from 'react';

export default class SimpleDonut extends React.Component{

render(){


let donutStyle = {border: "50px solid #f00",
    border-radius: "100px",
    height: "100px",
    width: "100px"}


return(
  <div style={donutStyle}></div>
)

}
