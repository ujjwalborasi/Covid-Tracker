import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const getdata = async (country) => {
  let tempurl = url;
  if (country) {
    tempurl = `${url}/countries/${country}`;

  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(tempurl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
}
export const regulardata = async () => {
  try {
    const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    const extracteddata = data.map((dailydata) => (
      {
        confirmed: dailydata.confirmed.total,
        deaths: dailydata.deaths.total,
        date: dailydata.reportDate
      }
    ))
    return extracteddata;
  } catch (error) {
  }
}
export const countries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    const extractedcountrynames = countries.map(countries => countries.name);
    return extractedcountrynames;
  } catch (error) {
  }
}

export const locateCountry = async (country) => {
  if (country) {
    try {
      const { data: { features } } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?types=country&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
     const CountryStats = {
       coordinates : features[0].geometry.coordinates,
       short_code :  features[0].properties.short_code
     }
     
      return CountryStats;

    
    } catch (error) {
      console.log(error)
    }
  }
  else {
    let temp = [78.476681027237, 22.1991660760527]
    return temp
  }

}