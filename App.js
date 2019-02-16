import React, { Component } from "react";
import User from "./User";
import "./App.css";

const APIfemale = "https://randomuser.me/api/?gender=female";
const APImale = "https://randomuser.me/api/?gender=male";

class App extends Component {
  state = {
    users: []
  };

  reset = () => {
    this.setState({
      users: []
    });
  };

  addFemaleUser = () => {
    fetch(APIfemale)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(response => {
        const user = response.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(err => console.log("We have an error" + err));
  };

  addMaleUser = () => {
    fetch(APImale)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(response => {
        const user = response.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(err => console.log("We have an error" + err));
  };

  render() {
    return (
      <div>
        <h2>Check out our users now!</h2>
        <button onClick={this.addFemaleUser}>Add female user</button>
        <button onClick={this.addMaleUser}>Add male user</button>
        <button onClick={this.reset}>Reset</button>
        {this.state.users.length > 0 ? (
          this.state.users.map(user => (
            <User
              key={user.name.first}
              title={user.name.title}
              name={user.name.first}
              surname={user.name.last}
              email={user.email}
              picture={user.picture.large}
            />
          ))
        ) : (
          <p>Add some users!</p>
        )}
      </div>
    );
  }
}

export default App;
