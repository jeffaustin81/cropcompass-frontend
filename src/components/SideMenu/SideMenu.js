import React from 'react';
// import Menu from '../Menu/Menu';
// import MenuItem from '../MenuItem/MenuItem';

var SideMenu = React.createClass({

    showRight: function() {
        this.refs.right.show();
    },

    render: function() {
        return <div>
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
