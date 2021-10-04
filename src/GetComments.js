import { useEffect, useState } from 'react'



export const GetComments = ({ post }) => {

    //variable for show state, default to false/not showing
    const [show, setShow] = useState(false);

    //variable for comments state, defaults to empty array
    const [comments, setComments] = useState([]);

    //second fetch call to retrieve data from comments for specified user
    //set dependecy to specific id pertaining to EACH post, the post.id is specific to each post so we use [post.id] which will make this fetch call for every post within the specified userId
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;

        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }, [post.id]);

    //click handler for post.body to show comments upon click
    const clickHandler = () => {
        setShow(!show);
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p onClick={clickHandler}>{post.body}</p>
            {
                show &&
                    <div>
                    {comments.map(comment => (
                    <div>
                        <h6>Comments: {comment.body}</h6>
                    </div>
                    ))}
                </div>
            }
        </div>
    )
}
