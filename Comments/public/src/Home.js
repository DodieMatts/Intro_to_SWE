import React, { Component } from 'react';
import Header from './components/Header.js'


class Home extends Component {
  render() {
    return(
      <div id="Home">
      <header>
          <Header />
      </ header>

            <body>
            <p> this is a test of a simple webpage </p>
            </body>

          <footer>
          </footer>
      </div>
    );
  }
}

export default Home;
