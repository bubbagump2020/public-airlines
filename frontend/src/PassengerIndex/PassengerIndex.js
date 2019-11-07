import React from 'react';
import { Search } from './SearchBar';
import { PassengerList } from './PassengerList';

export class PassengerIndex extends React.Component {
    
    state = {
        passengers: []
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/passengers')
            .then( response => response.json())
            .then( passengers => this.setState({ 
                passengers: passengers 
            }))
    }
    
    render() {
        return (
            <div>
                <h1>PassengerIndex</h1>
                <Search />
                <PassengerList passengers={this.state.passengers} />
            </div>
        );
    }
}