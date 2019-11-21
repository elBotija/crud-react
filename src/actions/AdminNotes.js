import axios from 'axios'
import Swal from 'sweetalert2'


// const apiUrl = 'https://jsonplaceholder.typicode.com/',
const apiUrl = 'http://localhost:3011/';


const obtenerPosts = async () => {
  return await axios.get(`${apiUrl}posts`)
}

const obtenerPost = async id => {
  return await axios.get(`${apiUrl}posts/${id}`)
}

const crearPost = post => {
  axios.post(`${apiUrl}posts`, post)
      .then( res => {
          if(res.status === 201){
              let postId = {id: res.data.id}
              const nuevoPost = Object.assign({}, res.data.post, postId)
              console.log(nuevoPost)   
              this.setState(prevState => ({
                  posts: [...prevState.posts, nuevoPost]
              }))
              Swal.fire(
                  'Felicitaciones!',
                  'Se creo el post correctamente!',
                  'success'
              )
          }
      }
  )
}

const editarPost = (post, id) => {
  axios.put(`${apiUrl}posts/${id}`, post)
      .then( res => {
          if(res.status === 200){
              // let postId = {id: res.data.id}
              // const nuevoPost = Object.assign({}, res.data.post, postId)
              // this.setState(prevState => ({
              //     posts: [...prevState.posts, nuevoPost]
              // }))
              // Swal.fire(
              //     'Felicitaciones!',
              //     'Se Guardo el post correctamente!',
              //     'success'
              // )
              console.log("bleeeee")
              this.props.history.push('/')
          }
      }
  )
}

const borrarPost = (id) => {
  axios.delete(`${apiUrl}posts/${id}`)
      .then(res => {
          if(res.status === 200){
              const posts = [...this.state.posts]
              let resultado = posts.filter(post => (
                  post.id !== id
              ))
              this.setState({
                  posts: resultado
              })
          }
      })
}

export { obtenerPosts, obtenerPost, crearPost, editarPost ,borrarPost}