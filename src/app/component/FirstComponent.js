import React from 'react';
import 'app/component/FirstComponent.scss';
import { getServerCurrentTimeStamp } from 'app/utils/utils';

const FirstComponent = () => {

  return Object.assign({}, React.Component.prototype, {

    componentWillMount() {
      this.state = {
        timeStamp: ''
      };
    },

    handleClick(e) {
      getServerCurrentTimeStamp().then((data) => {
        this.setState({
          timeStamp: data.timeStamp
        });
      });
    },

    render() {

      let content =
        <div>
          <button id="getTimeStamp" onClick={(e) => {this.handleClick(e);}}>Get Server Time</button>
          <h4>{ this.state.timeStamp }</h4>
        </div>;

      return content;
    }

  });

};

FirstComponent.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default FirstComponent;
