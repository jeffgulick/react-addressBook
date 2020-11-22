import './App.css';
import { Component } from 'react';
import Display from './Components/display';

export default class App extends Component{
  constructor(){
    super()

    this.state ={
      contacts: []
    }
  }
  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.results.map(user =>(
        {
          name: `${user.name.first} ${user.name.last}`,
          thumbnail: `${user.picture.large}`,
          phone: `${user.phone}, ${user.cell}`,
          email: `${user.email}`,
          id: `${user.login.uuid}`
        }
      
      )))
      .then(contacts => this.setState({
        contacts,
      }))
  }

  onClick = () => {
    this.setState({
      isClicked: !this.isClicked
    })
  }

  render(){
    return(
      <div>
        {this.state.contacts.map(user => (
          <Display 
            key={user.id}
            user = {user} />
        ))}
      </div>
    )
  }
}