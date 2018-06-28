import React, { Component } from "react";
import "./App.css";
import quotes from "./quotes.json";

let randomItem = quotes[Math.floor(Math.random() * quotes.length)];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let newQuate = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("text").innerHTML = newQuate.quote;
    document.getElementById("author").innerHTML = newQuate.author;
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <i className="fas fa-quote-left" />
              <p id="text">{randomItem.quote}</p>
            </div>
            <div className="quote-author">
              - <span id="author">{randomItem.author}</span>
            </div>
            <div className="buttons">
              <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>

              <button className="button" onClick={this.handleClick}>
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
