import React from 'react'
import './App.css';
import Chart from './components/chart/Chart';
import Country from './components/CountriesAffected/Country'
import Section from './components/sections/Sections'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData})
  }
  render(){
    const { data } = this.state
  return (
    <div className="App container">
      <Chart />
      <Country />
      <Section data={data}/>
    </div>
  );
}
}

export default App;
