import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const LineChart = require("react-chartjs-2").Line;
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }],
    };
    const chartOptions = {

    }
    return (
      <div className="App">
        <LineChart data={data} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}

export default App;
