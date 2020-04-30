import React, { Component } from 'react';
import Title from "./Title";
import ListItem from "./ListItem";
import BottomText from "./BottomText";
import "./App.css";


class App extends Component {
  state = {
    number: 5
  }

  onCheck = (ingredientName, checked) => {
    console.log(ingredientName, checked);
  }

  render() {
    return (
      <div className="container">
        <Title title="Pizza Constructor" />

        <ListItem ingredientName="Extra Dough" onCheckState={this.onCheck} />
        <ListItem ingredientName="Cheese Crust" onCheckState={this.onCheck} />
        <ListItem ingredientName="Extra Spicy Sauce" onCheckState={this.onCheck} />
        <ListItem ingredientName="Mozzarella Cheese" onCheckState={this.onCheck} />
        <ListItem ingredientName="Mascarpone Cheese" onCheckState={this.onCheck} />
        <ListItem ingredientName="Ham" onCheckState={this.onCheck} />
        <ListItem ingredientName="Salami" onCheckState={this.onCheck} />
        <ListItem ingredientName="Tomatoes" onCheckState={this.onCheck} />
        <ListItem ingredientName="Olives" onCheckState={this.onCheck} />

        <BottomText amount={this.state.number} />
      </div>
    );
  }
}


export default App;