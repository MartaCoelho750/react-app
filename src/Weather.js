import React from "react";

import "./App.css";

export default function Weather() {
  return (
    <section className="glasseffect">
      <form id="search_form">
        <p className="form">
          <input
            type="text"
            placeholder="Insert your current location"
            size="25"
            id="search"
          />
          <button type="submit" id="submit">
            Submit
          </button>
          <button type="input" id="input">
            Current
          </button>
        </p>
      </form>
      <br />
      <div id="current_date"></div>
      <div className="container">
        <h1 id="city">Porto</h1>
        <h2 className="temperature">27º</h2>
        <button className="click" type="click" id="celsius">
          °C
        </button>{" "}
        /
        <button className="click" type="click" id="fahrenheit">
          °F
        </button>
        <br />
        <br />
        <nav className="columns">
          <div className="row">
            <div className="col">Precipitation</div>
            <div className="col">UV Index High</div>
          </div>

          <div className="row">
            <div className="col" id="prec">
              2%
            </div>
            <div className="col">
              <span role="img">⛈</span>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <div className="row">
          <nav className="futureone">
            <div className="col-1">
              <div className="col">Monday</div>
              14º/25º
              <div className="col">
                <span role="img">⛈</span>
              </div>
            </div>
          </nav>
          <nav className="futuretwo">
            <div className="col-1">
              <div className="col">Tuesday</div>
              10º/25º
              <div className="col">
                <span role="img">⛈</span>
              </div>
            </div>
          </nav>
          <nav className="futurethree">
            <div className="col-1">
              <div className="col">Wednesday</div>
              7º/18º
              <div className="col">
                <span role="img">⛈</span>
              </div>
            </div>
          </nav>
          <nav className="futurefour">
            <div className="col-1">
              <div className="col">Thursday</div>
              14º/25º
              <div className="col">
                <span role="img">⛈</span>
              </div>
            </div>
          </nav>
          <nav className="futurefive">
            <div className="col-1">
              <div className="col">Friday</div>
              9º/21º
              <div className="col">
                <span role="img">⛈</span>
              </div>
            </div>
          </nav>
          <br />
          <br />
        </div>
      </div>
      <p>
        {" "}
        <a href="https://github.com/MartaCoelho750/react-app">
          Open Source{" "}
        </a>{" "}
        By Marta Coelho{" "}
      </p>
    </section>
  );
}
