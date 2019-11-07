import React from 'react';
import { TicketForm } from './TicketForm';
import { TicketList } from './TicketList';
import { Link } from 'react-router-dom'

export class PassengerShow extends React.Component {

    state = { 
        passenger: null,
        airlines: []
    } 

    componentDidMount(){
        fetch(`http://localhost:3001/passengers/${this.props.match.params.id}`)
            .then( response => response.json())
            .then( passenger => this.setState({ passenger: passenger }))
        fetch(`http://localhost:3001/airlines`)
            .then( response => response.json())
            .then( airlines => this.setState({ airlines: airlines }))
    }

    createTicket = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                airline_id: e.target.airline.value,
                passenger_id: this.state.passenger.id
            })
        })
            .then( response => response.json())
            .then( ticket => this.setState({
                passenger: {
                    ...this.state.passenger,
                    tickets: [
                        ...this.state.passenger.tickets,
                        ticket
                    ]
                }
            }))
    }

    render() {
        if(this.state.passenger === null){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <Link to="/"><button>Back</button></Link>
                <h1>{this.state.passenger.name}</h1>
                <div style={{ display: 'flex', height: '90vh' }}>
                    <div style={{ flex: 1, borderRightStyle: 'solid', borderRightWidth: 2}}>
                        <TicketForm airlines={this.state.airlines} createTicket={e => this.createTicket(e)} />
                    </div>
                    <div style={{ flex: 1, padding: 5 }}>
                        <TicketList tickets={this.state.passenger.tickets} />
                    </div>
                </div>
            </div>
        );
    }
}