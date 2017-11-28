import React from 'React';
import { View } from 'react-native';
import {styles} from '../../styling/styles.js';

export class Container extends React.Component {
  render() {
    return <View {...this.props} style={[this.props.style, styles.container]}>{this.props.children}</View>;
  }
}
