import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

class CounterClass extends React.Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <p>Value: {this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Pleas, click on me
        </button>
      </div>
    );
  }
}

function CounterHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // const users = [{ id: 1, name: "Witek L" }];
  return (
    <div>
      <h1>Users</h1>
      {users.map((users) => (
        <div key={users.id}>{users.name}</div>
      ))}
    </div>
  );
}

class UsersClass extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map((users) => (
          <div key={users.id}>{users.name}</div>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <UsersClass />
      <Users />
      <CounterClass />
      <CounterHook />
    </div>
  );
}

export default App;
