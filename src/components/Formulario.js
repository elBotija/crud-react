import React, {Component} from 'react'

class Formulario extends Component {
    render(){
        return(
            <form className="col-8">
                <legend className="text-center">
                    Crear Nuevo Post
                </legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input type="text" className="form-control" placeholder="titulo del post"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea className="form-control" placeholder="contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        )
    }
}
export default Formulario
