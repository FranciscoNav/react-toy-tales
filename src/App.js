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
      console.log("New Story", data)
      this.setState({
        toyObjects:[...this.state.toyObjects, data]
      })
    })
    this.handleClick()
  }
  
  deleteToy = (toy) => {
    fetch(`http://localhost:3001/toys/${parseInt(toy.id)}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(data =>{
      let findIndex = this.state.toyObjects.indexOf(toy)
      this.state.toyObjects.splice(findIndex, 1)
      console.log(findIndex)
      this.setState({
        toyObjects:[...this.state.toyObjects]
      })
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
        <ToyContainer toys={this.state.toyObjects} deleteToy={this.deleteToy}/>
      </>
    );
  }
}

export default App;
