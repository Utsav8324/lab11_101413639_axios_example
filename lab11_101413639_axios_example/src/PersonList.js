import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <Container>
        {this.state.persons.map(person => (
          <Card className="user-card mb-4" key={person.login.uuid}>
            <div className="user-info">
              <img
                src={person.picture.large}
                alt={`${person.name.first} ${person.name.last}`}
                className="user-image"
              />
              <div>
                <Card.Title>{`${person.name.title} ${person.name.first} ${person.name.last}`}</Card.Title>
                <Card.Text>
                  <strong>User Name:</strong> {person.login.username}<br />
                  <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                  <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                  <strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}<br />
                  <strong>Email:</strong> {person.email}<br />
                  <strong>Birth Date and Age:</strong> {`${person.dob.date.substring(0, 10)} (${person.dob.age} years)`}<br />
                  <strong>Register Date:</strong> {person.registered.date.substring(0, 10)}<br />
                  <strong>Phone:</strong> {person.phone}<br />
                  <strong>Cell:</strong> {person.cell}
                </Card.Text>
              </div>
            </div>
            <Button variant="primary">Details</Button>
          </Card>
        ))}
      </Container>
    );
  }
}

export default PersonList;