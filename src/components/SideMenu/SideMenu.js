import React from 'react';
import { IndexLink, Link } from 'react-router'


var SideMenu = React.createClass({

    showRight: function() {
        this.refs.right.show();
    },

    render: function() {
        return <div>

          <h1>Hello I am a Menu!</h1>


        </div>;
    }
});

export default SideMenu;


    // <button onClick={this.showRight}>Show Right Menu!</button>
    //
    // <Menu ref="right" alignment="right">
    //     <MenuItem hash="first-page">First Page</MenuItem>
    //     <MenuItem hash="second-page">Second Page</MenuItem>
    //     <MenuItem hash="third-page">Third Page</MenuItem>
    // </Menu>
