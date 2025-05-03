import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: true,
  };

  handleClick = () => {
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
          <h4 style={{ color: changeColor ? "red" : "blue" }}>
            Hii im class based component
          </h4>
        ) : (
          <h4>Im false based component</h4>
        )}

        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
