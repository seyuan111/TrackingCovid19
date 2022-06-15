import React from 'react'
import './App.css';
import Chart from './components/chart/Chart';
import Country from './components/CountriesAffected/Country'
import Section from './components/sections/Sections'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country})
  }

  render(){
    const { data, country } = this.state
  return (
    <div className="App container">
      <Chart data={data} country={country}/>
      <Country handleCountryChange={this.handleCountryChange}/>
      <Section data={data}/>
    </div>
  );
}
}

export default App;
