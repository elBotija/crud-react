import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import Header from './Header'
import Navegacion from './Navegacion'
import Posts from './Posts'
import SinglePost from './SinglePost'
import Formulario from './Formulario'

class Router extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        this.obtenerPost()
    }

    obtenerPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    crearPost = post => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
            .then( res => {
                if(res.status === 201){
                    let postId = {id: res.data.id}
                    const nuevoPost = Object.assign({}, res.data.post, postId)
                    console.log(nuevoPost)   
                    this.setState(prevState => ({
                        posts: [...prevState.posts, nuevoPost]
                    }))
                    Swal.fire(
                        'Felicitaciones!',
                        'Se creo el post correctamente!',
                        'success'
                    )
                }
            }
        )
    }

    borrarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if(res.status === 200){
                    const posts = [...this.state.posts]
                    let resultado = posts.filter(post => (
                        post.id !== id
                    ))
                    this.setState({
                        posts: resultado
                    })
                }
            })
    }

    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        <Navegacion/>
                    </div>
                    <Switch>
                        <Route exact path="/" render={ () => {
                            return(
                                <Posts
                                    posts={this.state.posts}
                                    borrarPost={this.borrarPost}

                                />
                            )
                        }}/>
                        <Route exact path="/post/:postId" render={ (props) =>{
                                let {postId} = props.match.params
                                const {posts} = this.state
                                let filtro = posts.filter(p =>
                                    p.id === parseInt(postId)
                                )
                                return(
                                    <SinglePost
                                        post={filtro[0]}
                                    />
                                )
                            }}
                        />
                        <Route exact path="/crear" render={ () => {
                            return <Formulario crearPost={this.crearPost}/>
                        }}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router
