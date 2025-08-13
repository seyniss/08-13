import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PostForm.css' 

const PostForm = () => {
    const API = import.meta.env.VITE_API_URL
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    const fetchPosts = async () => {
        try {
            const res = await axios.get(`${API}/api/posts`)
            const data = Array.isArray(res.data) ? res.data : res.data.posts ?? []
            setPosts(data)
        } catch (e) {
            setError(e.message || '불러오기 실패')
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="post-container">
            <h1>PostForm</h1>
            {error && <p className="error">{error}</p>}
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostForm