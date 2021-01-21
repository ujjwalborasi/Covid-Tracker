import './App.css';
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts';
import Header from './Components/Header/Header';
import Countryselector from './Components/CountryWise/countryselector';
import { getdata, locateCountry } from './FetchApi/fetch';
import React, { Component } from 'react'
import Map from './Components/Map/map';
export class App extends Component {
  state = {
    Data: {},
    country: '',
    Coordinates: {
      longitude: 0,
      latitude: 0
    },
    ShortCode: '',
    Theme: 'Dark',

  }
  async componentDidMount() {
    const Response = await getdata();
    this.setState({ Data: Response });
  }
  Getcountry = async (country) => {
    const country_wise_fetched_data = await getdata(country);
    const FetchedCoordinates = await locateCountry(country);
    this.setState({ country: country })
    this.setState({ Data: country_wise_fetched_data });

    if (country) {
      this.setState({ Coordinates: { longitude: FetchedCoordinates.coordinates[0], latitude: FetchedCoordinates.coordinates[1] } });
      this.setState({ ShortCode: FetchedCoordinates.short_code })
      console.log(FetchedCoordinates)
    }
    if(country==='')
    {
      this.setState({ShortCode: ''})
    }
  }
  ModeSwitch = () => {
    if (this.state.Theme === 'Dark') {
      this.setState({ Theme: 'Light' });
      let Temp = document.querySelector(':root');
      Temp.setAttribute('data', 'light')

    }
    else {
      this.setState({ Theme: 'Dark' });
      let Temp = document.querySelector(':root');
      Temp.setAttribute('data', '')
    }
  }
  render() {
    const { Data, country, ShortCode } = this.state;

    return (
      <div id='app' className='app-body'>
        <div className='main'>
          <Header country={country} shortcode={ShortCode} ModeSwitch={this.ModeSwitch} ></Header>
          <Cards data={Data}></Cards>
          <Charts data={Data} country={country}></Charts>
          <Countryselector Getcountry={this.Getcountry}></Countryselector>
          {country ?
            (<Map Coordinates={this.state.Coordinates} country={country} ></Map>)
            : null}

        </div>
      </div>
    )
  }
}
export default App

