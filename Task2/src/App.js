import React from 'react';
import './App.css';
import Header from './components/Header'
import CardList from './components/CardList';
import Loader from './components/Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users1: [],
      users2: [],
      isClicked: false,
      isloading: false,
    }
  }
  async btnClicked() {
    this.setState({ isClicked: true, isloading: true })
    let response1 = await fetch("https://reqres.in/api/users?page=1")
    let response2 = await fetch("https://reqres.in/api/users?page=2")
    let data1 = await response1.json();
    let data2 = await response2.json();
    this.setState({ users1: data1.data })
    this.setState({ users2: data2.data })
    console.log(this.state.users);

    setTimeout(() => {
      this.setState({ isloading: false })
    }, 3000)
  }
  render() {
    if (this.state.isClicked && this.state.isloading) {
      return (
        <>
          <Header click={this.btnClicked.bind(this)}  />
          <div style={{height: '300px',display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{marginBottom: '5vh', fontSize: '4rem', borderBottom: '4px solid #950740'}}>Lets Grow More</h1>
          </div>
          <Loader />
        </>
      )
    }
    else if (this.state.isClicked && this.state.isloading === false) {
      return (
        <>
          <Header click={this.btnClicked.bind(this)} />
          <div style={{height: '300px',display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{marginBottom: '5vh', fontSize: '4rem', borderBottom: '4px solid #950740'}}>Lets Grow More</h1>
          <h2 style={{borderBottom: '4px solid #950740', marginTop: '2vh'}}>
              Our Users
            </h2>
          </div>
          <CardList users={this.state.users1} />
          <CardList users={this.state.users2} />
        </>
      )
    }
    else {
      return (
        <>
          <Header click={this.btnClicked.bind(this)}  />
          <div style={{height: '300px',display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{marginBottom: '5vh', fontSize: '4rem'}}>Lets Grow More</h1>
            <h2 style={{borderBottom: '4px solid #950740'}}>
              Click on Get users button
            </h2>
          </div>
        </>
      )
    }
  }
}

export default App;
