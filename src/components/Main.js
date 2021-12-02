import React from "react";
import FullList from "./FullList";
import Detail from "./Detail";

class Main extends React.Component {
  state = {
    flags: [],
  };

  componentDidMount() {
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        this.setState({
          flags,
        });
      });
  }
  render() {
    return (
      <div>
        <FullList flags={this.state.flags} />
        <Detail />
      </div>
    );
  }
}

export default Main;
