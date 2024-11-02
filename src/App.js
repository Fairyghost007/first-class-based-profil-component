import React, { Component } from "react";
import './App.css';

import profil from "./imgs/avatar.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Birane Ndiaye",
        bio: "Je suis  developer",
        imgSrc: profil,
        profession: "Developper Web"
      },
      shows: false,
      tempPasser: 0
    };
  }

  buttonSwitch = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      tempPasser: 0
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.shows) {
        this.setState((prevState) => ({
          tempPasser: prevState.tempPasser + 1
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { Person, shows, tempPasser } = this.state;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
        <button
          onClick={this.buttonSwitch}
          className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <img
              src={Person.imgSrc}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4"
            />
            <h1 className="text-2xl font-semibold mb-2">{Person.fullName}</h1>
            <p className="text-gray-700 mb-4">{Person.bio}</p>
            <h2 className="text-lg font-medium text-blue-600">{Person.profession}</h2>
            <p className="text-gray-500 mt-4">
              Time interval since the component was monted: <span className="font-semibold">{tempPasser}</span> seconds
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
