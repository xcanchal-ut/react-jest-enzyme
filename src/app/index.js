import React, { PropTypes } from 'react';

const App = (props) => (
    <div>{props.children}</div>
);

App.propTypes = {
    // Injected by React Router
    children: PropTypes.node,
};

export default App;
