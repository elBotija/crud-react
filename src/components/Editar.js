import React, {Component} from 'react'


class Editar extends Component {
    // crear ref
    tituloRef = React.createRef()
    entradaRef = React.createRef()
    
    crearPost = e => {
        e.preventDefault()
        // leer ref
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1    
        }
        //enviar props o peticion
        this.props.crearPost(post)
    }
    render(){
        if(!this.props.post) return null
        const {title,body} = this.props.post
        return(
            <form onSubmit={this.crearPost} className="col-8 offset-2">
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
                <button type="submit" className="btn btn-primary">Grabar</button>
            </form>
        )
    }
}
export default Editar
