import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
