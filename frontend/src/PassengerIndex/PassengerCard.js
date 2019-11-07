import React from 'react';
import { Link } from 'react-router-dom'

export class PassengerCard extends React.Component {
    render() {
        return (
            <div style={{ borderStyle: 'solid', borderWidth: 2, borderRadius: 5, margin: 10, padding: 5}}  >
                <Link to={`/passengers/${this.props.passenger.id}`} >
                    <h1>{this.props.passenger.name}</h1>
                </Link>
            </div>
        );
    }
}