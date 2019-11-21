import React, {Component} from 'react'
import { obtenerPost } from '../../actions/AdminNotes'

class SinglePost extends Component {

    state = {
        post: {}
    }

    componentWillMount() {
        obtenerPost(this.props.match.params.postId).then((data) => {
            let post = data.data
            this.setState({ post })
        })
    }

    mostrarPost = (post) => {
        if(!post) return null
        const {title,body,userId} = post
        return(
            <React.Fragment>
                <h1>{title}</h1>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )

    }

    render(){
        return(
            <div className="col-12 col-md-8 offset-md-2">
                {this.mostrarPost(this.state.post)}
            </div>
        )
    }
}

export default SinglePost
