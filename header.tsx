import React, { Component } from 'react';
import { render } from 'react-dom';
export default class Header extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            NY Times
          </a>
        </div>
      </nav>
    );
  }
}