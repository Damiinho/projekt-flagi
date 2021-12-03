import React from "react";
import SmallOne from "./SmallOne";

class FullList extends React.Component {
  handleList = (props) =>
    this.props.flags.map((item) => (
      <SmallOne
        key={item.name}
        name={item.name}
        colors={item.colors}
        img={item.img}
        region={item.region}
        stripes={item.stripes}
        active={item.active}
        click={this.props.click}
      />
    ));

  render() {
    return <>{this.handleList()}</>;
  }
}

export default FullList;
