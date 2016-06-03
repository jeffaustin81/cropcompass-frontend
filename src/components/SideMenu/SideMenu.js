import React from 'react';


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
