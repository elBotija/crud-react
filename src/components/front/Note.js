import React from 'react';


const Note = props => {
  const post = props.post;
  const imagen = 'https://via.placeholder.com/350x250' ?
      <div className="card-image">
        <img src='https://via.placeholder.com/350x250' alt={post.title} />
      </div>
  :   ''
  
  return(
      <div className="col s12 m4">
        <div className="card">
          {imagen}
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.body}</p>
          </div>
          <div className="card-action">
            <a href={`/notas/${post.id}`} target="_blanck">Ir a la nota</a>
          </div>
        </div>
      </div>
  )
}
 
export default Note;