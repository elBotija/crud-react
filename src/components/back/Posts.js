import React, { Component } from 'react'
import Listado from './Listado'
import { obtenerPosts } from '../../actions/AdminNotes'

class Posts extends Component {

    state = {
        posts:[]
    }

    componentWillMount(){
        obtenerPosts().then((data)=>{
            let posts = data.data
            this.setState({ posts })
        })
    }

    render(){
        return(
            <div className='col-12 col-md-8 offset-md-2'>
                <h2 className="text-center">Posts</h2>
                <Listado
                    posts={this.state.posts}
                />
            </div>
        )
    }
}

export default Posts
