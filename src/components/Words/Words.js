import React from 'react'
import CuteButton from '../CuteButton/CuteButton'

export default class Words extends React.Component {
    render(){
      return(
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.children}</p>
        </div>
      )
    }
}
