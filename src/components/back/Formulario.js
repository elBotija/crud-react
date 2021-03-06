import React, {Component} from 'react'
import { crearPost } from '../../actions/AdminNotes'

class Formulario extends Component {
    // crear ref
    tituloRef = React.createRef()
    entradaRef = React.createRef()
    
    crearPost = e => {
        e.preventDefault()
        // leer ref
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            publish: false,    
        }
        //enviar props o peticion
        crearPost(post)
    }
    render(){
        return(
            <form onSubmit={this.crearPost} className="col-8 offset-2">
                <legend className="text-center">
                    Crear Nuevo Post
                </legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input ref={this.tituloRef} type="text" className="form-control" placeholder="titulo del post"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea ref={this.entradaRef} className="form-control" placeholder="contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        )
    }
}
export default Formulario
