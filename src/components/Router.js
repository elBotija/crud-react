import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import axios from 'axios'

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

    borrarPost = (id) => {
        console.log(id)
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
                                const posts = this.state.posts
                                let filtro
                                filtro = posts.filter(post => (
                                    post.id === postId
                                ))

                                return(
                                    <SinglePost
                                        post={filtro[0]}
                                    />
                                )
                            }}
                        />
                        <Route exact path="/crear" component={Formulario}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router
