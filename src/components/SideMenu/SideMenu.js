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
