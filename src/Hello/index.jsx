import React, { Component, Fragment } from 'react';
import styles from './styles.css';

export class Hello extends Component {
  state = { excited: false }

  toggleExcited({ excited }) {
    return { excited: !excited };
  }

  onClick = () => this.setState(this.toggleExcited);

  render() {
    return (
      <Fragment>
        <button className={styles.button} onClick={this.onClick}>Hello</button>
        {this.state.excited && <p>World</p>}
      </Fragment>
    );
  }
}
