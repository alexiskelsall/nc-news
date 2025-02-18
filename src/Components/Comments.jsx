import { useEffect, useState } from 'react'
import { getCommentsByID } from '../utils'




function Comments ({article_id}){
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        getCommentsByID(article_id).then((commentsFromApi)=>
        setComments(commentsFromApi))
        setLoading(false)
    },[article_id])
    
    if(loading) return <p>Loading...</p>

    return (
        <>
        <h3>Comments</h3>
        <section>
            <ul id="comment-list">
                {comments.map((comment)=>{
                    return (
                        <li className="comment-card" key={comment.comment_id}>
                            <p>Username: {comment.author}</p>
                            <p>{comment.body}</p>                            
                        </li>                  
                    )
                })}
            </ul>
        </section>
        </>

    )

}



export default Comments