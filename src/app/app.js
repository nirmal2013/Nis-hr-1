import React from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FastClick from 'fastclick';
import FirstComponent from 'app/component/FirstComponent';

const App = ({UI}, {store}) => {

  FastClick.attach(document.body);

  return (
    <div>
      <FirstComponent name={UI.type} />
    </div>
  );

};

// Redux Connector to store
const mapStateToProps = (state) => {
  return {
    UI: state.UI
  };
};

App.propTypes = {
  UI: React.PropTypes.object
};

App.contextTypes = {
  store: React.PropTypes.object
};

export default connect(mapStateToProps)(App);
