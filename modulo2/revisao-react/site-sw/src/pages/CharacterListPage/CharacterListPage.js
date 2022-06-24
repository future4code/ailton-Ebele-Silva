import React from "react";
import axios from "axios"
import {BASE_URL} from "../../constants/urls"
import { CharacterCard } from "./styled";
import { getCharacterList } from "../../services/requests";

export default class CharacterListPage extends React.Component {
    state = {
        charactersList: []
    }

    saveCharacter = (data)=> {
        this.setState({charactersList: data})
    }

    componentDidMount(){
        getCharacterList(this.saveCharacter)
    } 

    // componentDidMount(){
    //     this.getCharacterList()
    // } 

    // getCharacterList = () => {
    //     axios.get(`${BASE_URL}/people`)
    //     .then((res) => this.setState({charactersList: res.data.results}))
    //     .catch((err) => console.log(err.response))
    // }
    
  render() {
    const characters = this.state.charactersList.map((person)=> {
        return (
        <CharacterCard 
            key={person.url}
            onClick={()=> this.props.goToDetailPage(person.url)}
        >
            {person.name}
        </CharacterCard>
        )
    })

    // console.log(this.state.charactersList)
    return (
      <div>{characters}</div>
    )
  }
}

