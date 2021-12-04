import React from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import SelectColor from "./SelectColor";
import "../style/Main.css";

class Main extends React.Component {
  state = {
    flags: [],
    itemOnClick: {
      name: "",
      colors: "",
      img: "",
      region: "",
      stripes: "",
      active: "",
    },
    selectedColors: [],
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
    this.setState({
      itemOnClick: {
        name: item.name,
        colors: item.colors,
        img: item.img,
        region: item.region,
        stripes: item.stripes,
        active: item.active,
      },
    });
  };

  changeSelectedColor = (item) => {
    let selectedColors = [...this.state.selectedColors];

    const isSelectedFilter = (el) => el !== item;
    const findItem = selectedColors.findIndex((el) => el === item);

    if (findItem < 0) {
      selectedColors = [...this.state.selectedColors].concat(item);
    } else {
      selectedColors = selectedColors.filter(isSelectedFilter);
    }

    let flags = this.filterFullListByColor(selectedColors);

    this.setState({
      selectedColors,
      flags,
    });
  };

  filterFullListByColor = (selectedColors) => {
    let flagList = [...this.state.flags];
    let backtoActive = [];

    backtoActive = flagList.map((el) => {
      el.active = true;
      return el;
    });

    selectedColors.map((color) => {
      flagList = backtoActive.map((el) => {
        let findItem = el.colors.findIndex((item) => item === color);
        if (findItem < 0) {
          el.active = false;
        } else if (el.active === true) {
          el.active = true;
        }
        return el;
      });

      return flagList;
    });
    return flagList;
  };

  render() {
    return (
      <div className="main">
        <SelectColor
          click={this.changeSelectedColor}
          selected={this.state.selectedColors}
        />
        <div className="main-box">
          <div className="full-list">
            <FullList
              flags={this.state.flags}
              click={this.handleSmallOneClick}
            />
          </div>
          <div>
            <Detail data={this.state.itemOnClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
