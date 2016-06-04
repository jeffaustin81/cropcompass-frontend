import React from 'react';
import { IndexLink, Link } from 'react-router'


var SideMenu = React.createClass({

    showRight: function() {
        this.refs.right.show();
    },

    render: function() {
        return (
          <div className="col-md-12">
            <h1>Hello I am a Menu!</h1>
          </div>
        )
    }
});

export default SideMenu;
