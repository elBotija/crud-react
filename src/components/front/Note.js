import React from 'react';


const Note = props => {
  const post = props.post;
  const imagen = (post.urlToImage) ?
      <div className="card-image">
        <img src={post.urlToImage} alt={post.title} />
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