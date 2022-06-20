import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
// const Postagem = 
// const PostContainer = styled.div`
//   border: 1px solid gray;
//   width: 300px;
//   margin-bottom: 10px;
// `

// const PostHeader = styled.div`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `

// const PostFooter = styled.div`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   padding: 0 10px;
//   justify-content: space-between;
// `

// const UserPhoto = styled.img`
//   height: 30px;
//   width: 30px;
//   margin-right: 10px;
//   border-radius: 50%;
// `

// const PostPhoto = styled.img`
//   width: 100%;









class App extends React.Component {
  state = {
    posts:[
      {
        nomeUsuario: "paulinha",
        fotoUsuario: <img src="https://picsum.photos/50/50"/>,
        fotoPost: <img src="https://picsum.photos/200/150"/>
      },
      {
        nomeUsuario: "ebele",
        fotoUsuario: <img src="https://picsum.photos/51/50"/> ,
        fotoPost: <img src="https://picsum.photos/200/150"/> 
      },
      {
        nomeUsuario: "chico",
        fotoUsuario: <img src="https://picsum.photos/51/52"/> ,
        fotoPost: <img src="https://picsum.photos/201/155"/>  
      }
    ]
    // valorInputNomeUsuario: "",
    // valorInputFotoUsuario: "",
    // valorInputFotoPost: ""
  }
    adicionaPost = () => {
      const novoPost = {
        nomeUsuario: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
      }

      const novoPosts = [...this.state.posts, novoPost];
      this.setState({posts: novoPosts})
      this.setState({valorInputNomeUsuario: "", valorInputFotoUsuario:"", valorInputFotoPost:""})
    }
    
    onChangeInputNomeUsuario = (event) => {
      this.setState({valorInputNomeUsuario: event.target.value})
    }

    onChangeInputFotoUsuario = (event) => {
      this.setState({valorInputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = (event) => {
      this.setState({valorInputFotoPost: event.target.value})
    }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario} 
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'ebele'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/201/150'}
        />  

        <Post
          nomeUsuario={'chico'}
          fotoUsuario={'https://picsum.photos/51/52'}
          fotoPost={'https://picsum.photos/201/155'}
        />  
        <input
        value={this.state.valorInputNomeUsuario}
        onchange={this.onChangeInputNomeUsuario}
        placeholder={"Nome do Usuário"}
        />
        <input
         value={this.state.valorInputFotoUsuario}
         onchange={this.onChangeInputFotoUsuario}
         placeholder={"Foto do Usuário"}
         />
          <input
         value={this.state.valorInputFotoPost}
         onchange={this.onChangeInputFotoPost}
         placeholder={"Foto do Post"}
         />
         <button onClick={this.adicionaPost}>Adicionar </button>
         <Post>{listaDePosts}</Post>
      </MainContainer>

      
    );
  }
}


export default App;



