import React, { Component } from 'react';
import List from  './List';
import './App.css';


class App extends Compononent {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }

  render() {
    const { store } = this.defaultProps
    return (
      <main className='App'>
        <header className='App'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} 
              />
          ))}
        </div>
      </main>
    )
  }
};


export default App;
