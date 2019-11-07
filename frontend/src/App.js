import React from 'react';
import { PassengerIndex } from './PassengerIndex/PassengerIndex';
import { PassengerShow } from './PassengerShow/PassengerShow';
import { BrowserRouter, Route } from 'react-router-dom' 

class App extends React.Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={PassengerIndex } />
          <Route exact path="/passengers/:id" component={PassengerShow} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
