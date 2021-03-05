import React from "react";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hola React!" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default StateComponent;
