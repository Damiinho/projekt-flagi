import React from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import "../style/Main.css";
import SelectRegion from "./SelectRegion";

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
    selectedStripes: "stripesfree",
    selectedRegiuon: "anyregion",
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

  // changeSelectedStripes = (item) => {
  //   let selectedStripes;

  //   if (this.state.selectedStripes === item) {
  //     selectedStripes = null;
  //   } else {
  //     selectedStripes = item;
  //   }
  //   this.filterFullListByStripes(selectedStripes);
  //   this.setState({
  //     selectedStripes,
  //   });
  // };

  // filterFullListByStripes = (selectedStripes) => {
  //   let flagList = [...this.state.flags];

  //   flagList.map((el) => {
  //     if (selectedStripes === "horizontal" && el.horizontalStripes === true) {
  //       el.active = true;
  //       return el;
  //     } else if (
  //       selectedStripes === "vertical" &&
  //       el.verticalStripes === true
  //     ) {
  //       el.active = true;
  //       return el;
  //     }
  //     if (selectedStripes === null) {
  //       el.active = true;
  //       return el;
  //     } else {
  //       el.active = false;
  //     }
  //   });
  // };

  // changeSelectedColor = (item) => {
  //   let selectedColors = [...this.state.selectedColors];

  //   const isSelectedFilter = (el) => el !== item;
  //   const findItem = selectedColors.findIndex((el) => el === item);

  //   if (findItem < 0) {
  //     selectedColors = [...this.state.selectedColors].concat(item);
  //   } else {
  //     selectedColors = selectedColors.filter(isSelectedFilter);
  //   }

  //   let flags = this.filterFullListByColor(selectedColors);

  //   this.setState({
  //     selectedColors,
  //     flags,
  //   });
  // };

  // filterFullListByColor = (selectedColors) => {
  //   let flagList = [...this.state.flags];
  //   let backtoActive = flagList.map((el) => {
  //     el.active = true;
  //     return el;
  //   });

  //   selectedColors.map((color) => {
  //     flagList = backtoActive.map((el) => {
  //       let findItem = el.colors.findIndex((item) => item === color);
  //       if (findItem < 0) {
  //         el.active = false;
  //       } else if (findItem > 0) {
  //         el.active = true;
  //       }
  //       return el;
  //     });

  //     return flagList;
  //   });
  //   return flagList;
  // };

  changeSelectedRegion = (item) => {
    let selectedRegion;

    if (this.state.selectedRegion === item) {
      selectedRegion = "anyregion";
    } else {
      selectedRegion = item;
    }

    this.changeList(selectedRegion);

    this.setState({
      selectedRegion,
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

    this.changeList(selectedColors);

    this.setState({
      selectedColors,
    });
  };

  changeSelectedStripes = (item) => {
    let selectedStripes;

    if (this.state.selectedStripes === item) {
      selectedStripes = "stripesfree";
    } else {
      selectedStripes = item;
    }

    this.changeList(selectedStripes);

    this.setState({
      selectedStripes,
    });
  };

  changeList = (item) => {
    let flags = [...this.state.flags];
    let selectedStripes = this.state.selectedStripes;
    let selectedColors = this.state.selectedColors;
    let selectedRegion = this.state.selectedRegion;

    if (typeof item === "object") {
      selectedColors = item;
    } else if (
      item === "horizontal" ||
      item === "vertical" ||
      item === "stripesfree"
    ) {
      selectedStripes = item;
    } else if (
      item === "europe" ||
      item === "asia" ||
      item === "oceania" ||
      item === "north-america" ||
      item === "south-america" ||
      item === "africa" ||
      item === "carraibean" ||
      item === "antarctica" ||
      item === "anyregion"
    ) {
      selectedRegion = item;
    }

    let backToActive = flags.map((el) => {
      el.active = true;
      return el;
    });

    backToActive.map((el) => {
      if (selectedStripes === "horizontal" && el.horizontalStripes === false) {
        el.active = false;
        return el;
      } else if (
        selectedStripes === "vertical" &&
        el.verticalStripes === false
      ) {
        el.active = false;
        return el;
      }

      return backToActive;
    });

    selectedColors.map((color) => {
      backToActive.map((el) => {
        let findItem = el.colors.findIndex((item) => item === color);

        if (el.active === false) {
          return el;
        } else if (findItem < 0) {
          el.active = false;
          return el;
        } else {
          el.active = true;
          return el;
        }
      });

      return selectedColors;
    });

    backToActive.map((el) => {
      if (el.active === false) {
        return el;
      } else if (selectedRegion === "europe" && el.region !== "europe") {
        el.active = false;
        return el;
      } else if (selectedRegion === "asia" && el.region !== "asia") {
        el.active = false;
        return el;
      } else if (selectedRegion === "oceania" && el.region !== "oceania") {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "north-america" &&
        el.region !== "north-america"
      ) {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "south-america" &&
        el.region !== "south-america"
      ) {
        el.active = false;
        return el;
      } else if (selectedRegion === "africa" && el.region !== "africa") {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "carraibean" &&
        el.region !== "carraibean"
      ) {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "antarctica" &&
        el.region !== "antarctica"
      ) {
        el.active = false;
        return el;
      }
      return backToActive;
    });
  };

  render() {
    return (
      <div className="main">
        <SelectColor
          click={this.changeSelectedColor}
          selected={this.state.selectedColors}
        />
        <SelectStripes
          click={this.changeSelectedStripes}
          selected={this.state.selectedStripes}
        />
        <SelectRegion
          click={this.changeSelectedRegion}
          selected={this.state.selectedRegion}
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
