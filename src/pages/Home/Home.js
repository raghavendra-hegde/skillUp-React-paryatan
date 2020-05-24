import React, { Component } from "react";
import "./Home.css";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

class Home extends Component {
  state = {
    cities: [],
    europeanCities: {},
    asianCities: {},
    exoticCities: {},
    activities: [],
    recVenues: {}
  };
  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const europeCitiesUrl = `${window.apiHost}/cities/europe`;
    const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
    const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

    const citiesPromises = [];

    citiesPromises.push(axios.get(citiesUrl));
    citiesPromises.push(axios.get(europeCitiesUrl));
    citiesPromises.push(axios.get(asiaCitiesUrl));
    citiesPromises.push(axios.get(exoticCitiesUrl));

    Promise.all(citiesPromises).then((data) => {
      /**
             * What ever the order in which axios call are pushed into array and passed to promises
             and irrespective of in which order they were completed, the array order will be maintained 
             */
      const recommendedCities = data[0].data;
      const europeanCities = data[1].data;
      const asianCities = data[2].data;
      const exoticCities = data[3].data;
      this.setState({
        cities: recommendedCities,
        europeanCities,
        asianCities,
        exoticCities
      });
    });

    const activitiesUrl = `${window.apiHost}/activities/today`;
    const activities = await axios(activitiesUrl);
    this.setState({
      activities: activities.data,
    });

    const recVenuesUrl = `${window.apiHost}/venues/recommended`;
    const venues = await axios(recVenuesUrl);
    console.log(venues)
    this.setState({
      recVenues: venues.data
    });
    console.log(this.state.recVenues);
  }
  render() {
    if((this.state.cities.length === 0) || (!this.state.recVenues.venues)){
      return(<Spinner />)
  }
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Cities
                cities={this.state.cities}
                headers="Recomended cities for you"
              />
            </div>
            <div className="col s12">
              <Activities
                activities={this.state.activities}
                header="Today in your area"
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.europeanCities.cities}
                headers={this.state.europeanCities.header}
              />
            </div>
            <div className="col s12">
              <Venues
                venues={this.state.recVenues.venues}
                header={this.state.recVenues.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.asianCities.cities}
                headers={this.state.asianCities.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.exoticCities.cities}
                headers={this.state.exoticCities.header}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
