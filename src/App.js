import React from 'react';
import Movielist from './Movielist';
import Nav from './Nav';
import {MovieProvider} from './MovieContext'; //curley braces because we are not exporting component default in movieContext
import AddMovie from './Addmovie';

function App() {
  return (
    <MovieProvider>
    <div>
      <Nav/>
      <AddMovie/>
      <Movielist />
    </div>
    </MovieProvider>
  );
}

export default App;
