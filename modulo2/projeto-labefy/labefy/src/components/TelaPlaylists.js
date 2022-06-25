import React from 'react'
import axios from "axios"
import styled from 'styled-components'
import DetalhesPlaylist from './DetalhesPlaylist'


// const CardPlaylist = styled.div`
// border: 1px solid gray;
// border-radius: 4px;
// padding: 10px;
// margin: 10px;
// width: 32vw;
// display: flex;
// align-items: center;
// justify-content: space-between;
// background-color: beige;
// `

export default class TelaPlaylists extends React.Component {
  state ={
    listaPlaylists:[],
    playlist:[],
    detalhes:[]
  }

  componentDidMount(){
    this.pegarPlaylists()
  }
  
    pegarPlaylists = ()=>{
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

     
        axios.get(url, {
          headers: {
            Authorization: "ebele-silva-ailton"
          }
        })
        .then((res)=>{
          this.setState({listaPlaylists: res.data.result.list})
          console.log(res)
        })
        .catch((err)=>{
          // console.log(err)
          alert ("Ocorreu um erro. Tente novamente")
        })
    }

    deletarPlaylist = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      axios.delete(url, {
        headers:{
          Authorization:"ebele-silva-ailton"
        }
      })
      .then((res)=>{
        alert("Playlist deletada!")
        this.pegarPlaylists()
      })
      .catch((err)=>{
        alert("Ocorreu um erro. Tente novamente.")
      })
    }

    mostraDetalhes = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      axios.get(url, {
          headers: {
              Authorization: "ebele-silva-ailton"
          }
      })
          .then((res) => {
              this.setState({ detalhes: res.data.result.list })
              console.log(res)
          })
          .catch((err) => {
              // console.log(err)
              alert("Ocorreu um erro. Tente novamente")
          })
  }

    // adicionaMusica = () =>{

    // }

  render() {
      // console.log(this.state.listaPlaylists)
     const novaListaPlaylists = this.state.listaPlaylists.map((lista) =>{
        return( <div key={lista.id}>
            {lista.name} 
           
            <button onClick={()=>this.deletarPlaylist(lista.id)}> X </button>
            <button onClick={()=> this.mostraDetalhes(lista.id)}> Veja mais</button>
          </div>
        )
         })
        // const novoDetalhes = this.state.detalhes.map((lista)=>{
        //   return (
        //     <div key={lista.id}>
        //       {lista.name}
        //       {lista.artist}
        //       {lista.id}
        //       {lista.url}
        //       <button onClick={()=> this.mostraDetalhes(lista.id)}> Veja mais</button>
        //     </div>
        //   )
        // }) 
    return (
      <div>
        {/* <h1>Labefy</h1> */}
        <button onClick={this.props.goToCreate}> Criar playlist </button>
        
        <h2>Minhas playlists</h2>
        {novaListaPlaylists} 
        
        {/* {novoDetalhes} */}
        {/* <button onClick={this.props.goToDetail}> Veja mais </button> */}
      
        {/* <DetalhesPlaylist/> */}
      </div>
    )
  }
}
