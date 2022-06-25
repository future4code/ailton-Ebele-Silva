import axios from 'axios'
import styled from 'styled-components'
import React, { Component } from 'react'
import CriaPlaylist from './components/CriaPlaylist'
import TelaPlaylists from './components/TelaPlaylists'
import DetalhesPlaylist from './components/DetalhesPlaylist'

export default class App extends Component {
  state = {
    telaAtual: "create",
    playlistClicadaId: ""
  }
 
 
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "create":
        return <CriaPlaylist goToPlaylist={this.goToPlaylist}/>
      case "playlists":
        return <TelaPlaylists goToCreate={this.goToCreate}/>
      case "detail":
        // return <DetalhesPlaylist goToPlaylist={this.goToPlaylist} id={this.state.playlistClicadaId}/>  
        return <DetalhesPlaylist goToPlaylist={this.goToPlaylist}/>  
      default:
        return <TelaPlaylists goToPlaylist={this.goToPlaylist}/>
    }
  }

  goToCreate = () =>{
    this.setState({telaAtual: "create"}) 
    console.log("clicou criar")
  }

  goToPlaylist = () =>{
    this.setState({telaAtual: "playlists"})
    console.log("clicou playlist")
  }

  goToDetail = (id) =>{
    this.setState({telaAtual: "detail", playlistClicadaId: id})
  }


  render() {
    return (
      <div>
         {this.escolheTela()}  
      {/* <button onClick={this.goToCreate}>Crie sua playlist</button>
      <button onClick={this.goToPlaylist}>Veja suas playlists</button> */}
    
      </div>
    )
  }
}

