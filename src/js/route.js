import React from 'react';
import ReactDOM from 'react-dom';

import template from 'templates/route.rt';

var RouteElement = React.createClass({
    render: template
});

ReactDOM.render(React.createElement(RouteElement), document.getElementById('root'));
