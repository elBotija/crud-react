import React, {Component} from 'react'
import { obtenerPost, editarPost } from '../../actions/AdminNotes'

class Editar extends Component {
    state = {
        isChecked: false,
        post: {}
    };

    handleChange = this.handleChange.bind(this);
    componentDidMount(){
        console.log("eeee",this.props)
        obtenerPost(this.props.match.params.postId).then(data => {
            let post = data.data
            this.setState({post, isChecked: post.publish})
        });
    }

    handleChange() {
        this.setState({ isChecked: !this.state.isChecked })
    }

    // crear ref
    tituloRef = React.createRef()
    entradaRef = React.createRef()

    editarPost = e => {
        e.preventDefault()
        // leer ref
        let post = {...this.props.post}
        post.title = this.tituloRef.current.value;
        post.body = this.entradaRef.current.value;
        post.publish = this.state.isChecked;
        //enviar props o peticion
        editarPost(post, this.state.post.id)
    }

    render(){
        if(!this.state.post) return null

        const {title,body} = this.state.post
        let showNoteState = 'No publicada'
        if(this.state.isChecked){
            showNoteState = 'Nota publicada'
        }
        return(
            <form onSubmit={this.editarPost} className="col-8 offset-2">
                <legend className="text-center">
                    Editar Post
                </legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input ref={this.tituloRef} type="text" defaultValue={title} className="form-control" placeholder="titulo del post"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea ref={this.entradaRef} defaultValue={body} className="form-control" placeholder="contenido..."></textarea>
                </div>
                <div className="form-group">
                    Estado de la nota:
                    <label className="switch">
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
                        <div className="slider"></div>
                        <p>{showNoteState}</p>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Grabar</button>
            </form>
        )
    }
}
export default Editar
