import React, { Component } from 'react';
import Registration from './containers/Registration/Registration';
import { translate } from 'react-i18next';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Registration t={this.props.t} i18n={this.props.i18n} />
      </div>
    );
  }
}

export default translate("translations")(App);
