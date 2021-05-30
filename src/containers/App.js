import React, { Component } from "react";
import CardList from "../components/Cardlist";
import { robots } from "../components/robots";
import SearchBox from "../components/searchbox";
import Scroll from "../components/scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

// STATE >> props

class App extends Component {
  constructor() {
    //Now the robot and search remains inside the parent component App.
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ robots: robots });
    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log("render");

    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />;
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
