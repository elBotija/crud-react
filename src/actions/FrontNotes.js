import axios from 'axios'
import Swal from 'sweetalert2'


// const apiUrl = 'https://jsonplaceholder.typicode.com/',
const apiUrl = 'http://localhost:3011/';


const obtenerPosts = async () => {
  return await axios.get(`${apiUrl}posts?publish=true`)
}

const obtenerPost = async id => {
  return await axios.get(`${apiUrl}posts/${id}`)
}


export { obtenerPosts, obtenerPost}