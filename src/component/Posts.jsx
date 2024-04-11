import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: 'Breakfast',
    title: 'This is the title of the firs post on this blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis recusandae libero quisquam animi quos veniam nihil necessitatibus saepe doloremque, voluptatum, cumque quas facilis accusantium minima. Labore nam dolor asperiores?',
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: 'Fruits',
    title: 'This is the title of the firs post on this blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis recusandae libero quisquam animi quos veniam nihil necessitatibus saepe doloremque, voluptatum, cumque quas facilis accusantium minima. Labore nam dolor asperiores?',
    authorID: 1
  },

  {
    id: '3',
    thumbnail: Thumbnail3,
    category: 'Cake',
    title: 'This is the title of the firs post on this blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis recusandae libero quisquam animi quos veniam nihil necessitatibus saepe doloremque, voluptatum, cumque quas facilis accusantium minima. Labore nam dolor asperiores?',
    authorID: 2
  },

  {
    id: '4',
    thumbnail: Thumbnail4,
    category: 'Desert',
    title: 'This is the title of the firs post on this blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis recusandae libero quisquam animi quos veniam nihil necessitatibus saepe doloremque, voluptatum, cumque quas facilis accusantium minima. Labore nam dolor asperiores?',
    authorID: 2
  },
]
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      {
        posts.map(({id, thumbnail, category, title, description, authorID}) => <PostItem key={id} thumbnail={thumbnail} />)
      }
    </section>
    
  )
}

export default Posts