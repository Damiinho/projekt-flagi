import React from "react";
import FullList from "./FullList";
import Detail from "./Detail";

class Main extends React.Component {
  state = {
    flags: [],
    itemOnClick: {
      name: "",
      colors: "",
      img: "",
      region: "",
      stripes: "",
    },
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

  handleSmallOneClick = (item) => {
    console.log(`hej ${item.name}`);

    this.setState({
      itemOnClick: {
        name: item.name,
        colors: item.colors,
        img: item.img,
        region: item.region,
        stripes: item.stripes,
      },
    });
  };

  render() {
    return (
      <div>
        <FullList flags={this.state.flags} click={this.handleSmallOneClick} />
        <Detail data={this.state.itemOnClick} />
      </div>
    );
  }
}

export default Main;
