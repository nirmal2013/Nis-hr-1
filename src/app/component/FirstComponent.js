import React from 'react';
import './FirstComponent.scss';

const FirstComponent = () => {

  return Object.assign({}, React.Component.prototype, {

    componentWillMount() {
      this.state = {
        show: false
      };
    },

    handleClick(e) {
      this.setState({
        show: !this.state.show
      });
    },

    render() {

      const {name} = this.props;

      return  <div className="container" onClick={ (e) => { this.handleClick(e); } }>
                <h1>{ this.state.show ? name : "Click" }</h1>
              </div>;
    }

  });

};

FirstComponent.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default FirstComponent;
