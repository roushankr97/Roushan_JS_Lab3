const appId = "0545aa215f225aa5937adf9ccc67410c";
const units = "metric";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
class WeatherAPI {

  constructor() {
    this.apiURL = new URL(baseURL);
  }

  constructURL(locationName) {
    this.apiURL.searchParams.append("q", locationName);
    this.apiURL.searchParams.append("appid", appId);
    this.apiURL.searchParams.append("units", units);
    console.log(this.apiURL.toString());
  }

  async invokeURL() {
    const responseObj = await fetch(this.apiURL.toString());
    const responseJson = await responseObj.json();
    return responseJson;
  }
  
  invokeURL2() {
    const responseObj = fetch(this.apiURL.toString())
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return responseObj;
  }
}

export { WeatherAPI }