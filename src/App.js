import React, { Component } from 'react';
import Contacts from './componentes/Contacts';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render() {
    const { contacts } = this.state
    return (
      <Contacts contacts={contacts} />
    )
  }
}

export default App;
