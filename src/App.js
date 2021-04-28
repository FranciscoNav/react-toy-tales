import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{

  state = {
    toyObjects:[],
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(data => this.setState({
      toyObjects: data
    }))
  }

  addToy=(toy)=>{
    console.log(toy)
    fetch('http://localhost:3001/toys',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(data =>{
      // this.setState({
      //   toyObjects: this.state.toyObjects.push(data)
      // })
    })

  }

  render(){
    return (
      <>
        <Header/>
        {this.state.display ? <ToyForm addToy={this.addToy}/>: null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toyObjects}/>
      </>
    );
  }
}

export default App;
