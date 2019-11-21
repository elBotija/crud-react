import React, { Component } from 'react'
import Post from './Post'

class Listado extends Component  {

    mostrarPosts = () => {
        const posts = this.props.posts
        if(posts.length === 0) return null
        return(
            <React.Fragment>
                {posts.map((p,i) => {
                    return(<Post
                        key={i}
                        info={p}
                    />)
                })}
            </React.Fragment>
        )

    }

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        )
    }
}
export default Listado
