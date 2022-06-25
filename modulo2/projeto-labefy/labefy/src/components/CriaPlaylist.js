import React from 'react'
import axios from "axios"


export default class CriaPlaylist extends React.Component {
   state = {
     nomePlaylist: ""
   }

   recebeNome = (event) => {
     this.setState({nomePlaylist :event.target.value})
   }

   criarPlaylist = () =>{
     console.log(this.state)
     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
     const body = {
       name: this.state.nomePlaylist
     }

    axios.post(url, body, {
       headers:{
         Authorization: "ebele-silva-ailton"
       }
     })
     .then((res)=> {
       alert("Playlist criada com sucesso!")
       this.setState({nomePlaylist:""}) 
      //  console.log(res)
     })
     .catch((err)=>{
      alert("Essa playlist já existe.")
      // console.log(err.response.data)
     })
   }


  render() {
   
    return (
      <div>
        <h1>Labefy</h1>
        <button onClick={this.props.goToPlaylist}>Minhas Playlists</button>
        <h2>Crie aqui suas playlists</h2>
       
         <input
         placeholder={"Digite o nome da playlist"}
         value={this.state.nomePlaylist}
         onChange={this.recebeNome} 
         /> 
          <button onClick={this.criarPlaylist}> Criar playlist </button>  
      </div>
    )
  }
}


