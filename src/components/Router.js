import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import Header from './Header'
import Navegacion from './Navegacion'
import Posts from './Posts'
import SinglePost from './SinglePost'
import Formulario from './Formulario'
import Editar from './Editar'

// const apiUrl = 'https://jsonplaceholder.typicode.com/',
const apiUrl = 'http://localhost:3011/';

class Router extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        this.obtenerPost()
    }

    obtenerPost = () => {
        axios.get(`${apiUrl}posts`)
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    crearPost = post => {
        axios.post(`${apiUrl}posts`, post)
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

    editarPost = (post, id) => {
        axios.put(`${apiUrl}posts/${id}`, post)
            .then( res => {
                if(res.status === 200){
                    let postId = {id: res.data.id}
                    const nuevoPost = Object.assign({}, res.data.post, postId)
                    this.setState(prevState => ({
                        posts: [...prevState.posts, nuevoPost]
                    }))
                    Swal.fire(
                        'Felicitaciones!',
                        'Se Guardo el post correctamente!',
                        'success'
                    )
                }
            }
        )
    }

    borrarPost = (id) => {
        axios.delete(`${apiUrl}posts/${id}`)
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
                        <Route exact path="/editar/:postId" render={ (props) =>{
                                let {postId} = props.match.params
                                const {posts} = this.state
                                let filtro = posts.filter(p =>
                                    p.id === parseInt(postId)
                                )
                                return(
                                    <Editar
                                        post={filtro[0]}
                                        editarPost={this.editarPost}
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
