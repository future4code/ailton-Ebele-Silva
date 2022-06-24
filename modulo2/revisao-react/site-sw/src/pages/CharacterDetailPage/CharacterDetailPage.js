import React from "react";
import axios from "axios"
import { getPlanet, getCharacter } from "../../services/requests";

export default class CharacterDetailPage extends React.Component {
  state = {
    character: {},
    planet: ""
  }

  componentDidMount() {
    getCharacter(this.props.url, this.saveCharacter)
  }

  // componentDidMount() {
  //   this.getCharacter()
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.character !== prevState.character) {
  //     this.getPlanet()
  //   }

  // }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.character !== prevState.character) {
      getPlanet(this.state.character.homeworld, this.savePlanet)
    }

  }

  saveCharacter = (data)=> {
    this.setState({character: data})
}

  savePlanet = (data)=> {
    this.setState({planet: data})
}

  // getCharacter = () => {
  //   axios.get(this.props.url)
  //     .then((res) => this.setState({ character: res.data }))
  //     .catch((err) => console.log(err.response))
  // }

  // getPlanet = () => {
  //   axios.get(this.state.character.homeworld)
  //     .then((res) => this.setState({ planet: res.data.name }))
  //     .catch((err) => console.log(err.response))
  // }

  render() {
    // console.log(this.state.character)
    return (
      <div>
        {this.state.character.name && this.state.planet ?
          (
            <div>
              <p>Nome:{this.state.character.name}</p>
              <p>Planeta Natal:{this.state.planet}</p>
            </div>
          ) : <p>Carregando...</p>
        }
        <button onClick={this.props.goToListPage}> Voltar para Lista</button>
      </div>
    )
  }
}
