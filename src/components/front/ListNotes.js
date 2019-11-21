import React, { Component } from 'react';
import { obtenerPosts } from '../../actions/FrontNotes'
import Note from './Note'
import '../../css/FrontNews.scss'

class ListNotes extends Component {
  state = { 
    posts: []
  }
  
  componentWillMount(){
    obtenerPosts().then(data => {
      let posts = data.data
      console.log("hi",posts)
      this.setState({ posts })
    })
  }

  render() { 
    let { posts } = this.state
    if(posts.length){
      return (
        posts.map(post => (
          <Note key={post.id} post={post}/>
        ))
      )
    }
    return '';
  }
}
 
export default ListNotes;