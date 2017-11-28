import React, { Component } from 'React';
import {PropTypes} from 'prop-types';

//function that receives a component, and returns a new composed component.
export default ComposedComponent => class extends Component {
  constructor() {
    super();

    if (!ComposedComponent.contextTypes) {
      ComposedComponent.contextTypes = {};
    }
    ComposedComponent.contextTypes.theme = PropTypes.string;
  }
  static contextTypes = {
    theme: PropTypes.string
  }
  static propTypes = {
    theme: PropTypes.string
  }
  static childContextTypes = {
    theme: PropTypes.string
  }
  getChildContext() {
    return {theme: this.props.theme || this.context.theme};
  }
  render() {
    let props = Object.assign({}, this.props, {theme: null});
    return <ComposedComponent {...props} />;
  }
};
