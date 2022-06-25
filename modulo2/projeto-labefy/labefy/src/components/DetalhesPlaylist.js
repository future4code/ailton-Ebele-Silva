import React from "react";
import axios from "axios";
import TelaPlaylists from "./TelaPlaylists";
import CriaPlaylist from "./CriaPlaylist";


export default class DetalhesPlaylist extends React.Component {
    // state = {
    //         detalhes: {
    //             id:"",
    //             name: "",
    //             artist: "",
    //             url:""
    //         }
    //     }
    //     mostraDetalhes = (id) => {
    //         const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

    //         axios.get(url, {
    //             headers: {
    //                 Authorization: "ebele-silva-ailton"
    //             }
    //         })
    //             .then((res) => {
    //                 this.setState({ detalhes: res.data.result.list.id })
    //                 console.log(res)
    //             })
    //             .catch((err) => {
    //                 // console.log(err)
    //                 alert("Ocorreu um erro. Tente novamente")
    //             })
    //     }
  
   



    render() {
        //  const novoDetalhe = this.state.detalhes.map((lista) => {
        //   return (<div key={lista.id}>
        //           {lista.name} 
        //          {lista.artist} 
        //           {lista.id}
        //           {lista.url}
        //             <div>
        //             <button onClick={() => this.props.goToPlaylists}> Playlists </button>
        //             <button onClick={() => this.props.goToCreate}> Crie a sua </button>
        //          </div>
        //         )
        //     })
            return (
                <div>
                    {/* {this.props.id}


                     {novoDetalhe}  */}
                    <h2>Detalhes</h2>
                    <button onClick={this.props.goToDetail}> Mais sobre minha playlist </button>
                </div>
            )
        }
    }