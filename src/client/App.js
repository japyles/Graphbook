import React, { useState } from 'react'

const App = () => {

    const [posts, setPosts] = useState(initialPosts)

  return (
    <div className="container">
        <div className="feed">
            { posts.map((post, i) => 
                <div key={post.id} className="post">
                    <div className="header">
                        <img src={post.user.avatar} />
                        <h2>{post.user.username}</h2>
                    </div>
                    <p className="content">
                        {post.text}
                    </p>
                </div>
            )}
        </div>
    </div>
  )
}

const initialPosts = [
    {
        id: 2,
        text: 'lorem ipsum',
        user: {
            avatar: './uploads/avatar1.png',
            username: 'Test User'
        }
    },
    {
        id: 1,
        text: 'lorem ipsum',
        user: {
            avatar: './uploads/avatar2.png',
            username: 'Test User 2' 
        }
    }
]

export default App