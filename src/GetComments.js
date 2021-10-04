import { useEffect, useState } from 'react'


export const GetComments = ({ post }) => {

    const [allComments, setAllComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;

        fetch(url)
            .then(res => res.json())
            .then(data => setAllComments(data))
        .catch(err => console.log(err)) 
    }, [post.id]);
    
    const displayComments = () => {
        setShowComments(!showComments)
    }

    return (
        <div className="App">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={displayComments}>Show Comments For This Post?</button>
            {showComments && 
            
                <div>
                {
                    allComments.map(comment => (
                        <div>
                            {comment.body}
                        </div>
                    ))
                }
                </div>
            }
        </div>
    )
}
