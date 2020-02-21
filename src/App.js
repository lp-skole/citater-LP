import React, { Component } from 'react';
import './App.scss';
import Quotes from './Quotes';
import AddQuote from './AddQuote';

class App extends Component{
  state = {
    quotes: [
      {title: 'Title', quote: `When you're young, you're stupid. You do silly things.`, author: 'Ozzy Osbourne', id: 1},
      {title: 'Title 2', quote: `Being sober on a bus is, like, totally different than being drunk on a bus.`, author: 'Ozzy Osbourne', id: 2},
      {title: 'Title 3', quote: `The only true wisdom is in knowing you know nothing.`, author: 'Socrates', id: 3},
      {title: 'Title 4', quote: `The unexamined life is not worth living.`, author: 'Socrates', id: 4},
      {title: 'Title 5', quote: `You can be a king or a street sweeper, but everyone dances with the Grim Reaper.`, author: 'Robert Alton Harris', id: 5},
      {title: 'Title 6', quote: `Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. In his house at R'lyeh dead Cthulhu waits dreaming.`, author: 'H.P. Lovecraft', id: 6},
      {title: 'Title 7', quote: `In the End, we will remember not the words of our enemies, but the silence of our friends.`, author: 'Martin Luther King, Jr.', id: 7},
    ]
  }
  addQuote = (quote) =>{
    quote.id = Math.random();
    let quotes = [...this.state.quotes, quote]
    this.setState({
      quotes: quotes
    })
  }
  deleteQuote = (id) =>{
    let quotes = this.state.quotes.filter(quote =>{
      return quote.id !== id
    });
    this.setState({
      quotes: quotes
    })
  }
  render(){
    return(
      <div className="App">
        <h1>Quotes</h1>
        <Quotes deleteQuote={this.deleteQuote} quotes={this.state.quotes}/>
        <AddQuote addQuote={this.addQuote}/>
      </div>
    )
  }
}

export default App;
