// WithLogging.js
import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      const componentName = this.getDisplayName();
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = this.getDisplayName();
      console.log(`Component ${componentName} is going to unmount`);
    }

    getDisplayName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLogging;
}

export default WithLogging;

