import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header</p>
        { this.props.children }
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;
