import React, { Component } from "react";
import "./App.css";

const quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth"
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone"
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse"
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar"
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin"
  },
  {
    quote:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh"
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle"
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus"
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck"
  },
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington"
  },
  {
    quote:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb"
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    quote:
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato"
  },

  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar"
  }
];

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
