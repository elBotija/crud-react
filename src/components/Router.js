import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './back/Header'
import Navegacion from './back/Navegacion'
import Posts from './back/Posts'
import SinglePost from './back/SinglePost'
import Formulario from './back/Formulario'
import Editar from './back/Editar'
import ListNotes from './front/ListNotes'

class Router extends Component {

    state = {
        posts: []
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
                        <Route exact path="/" component={ListNotes}/>
                        <Route exact path="/admin/" component={Posts}/>
                        <Route exact path="/post/:postId" component={SinglePost} />
                        <Route exact path="/editar/:postId" component={Editar}/>
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
