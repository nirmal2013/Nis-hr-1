import React from 'react';

const FirstComponent = () => {

  return Object.assign({}, React.Component.prototype, {

    componentWillMount() {
      console.log('Will Mount');

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

      return  <div onClick={ (e) => { this.handleClick(e); } }>
                <h1>{ this.state.show ? name : "I'm Hidden" }</h1>
              </div>;
    }

  });

};

FirstComponent.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default FirstComponent;
