import { Component } from "react";

class ClassBasedComponents extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    console.log("button clicked");

    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  render() {
    console.log(this.state);
    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? (
          <h2 style={{ color: changeColor ? "red" : "black" }}>
            Class based components
          </h2>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponents;
