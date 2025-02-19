import { useEffect, useState } from 'react'
import { getCommentsByID } from '../utils'
import CommentsForm from './CommentsForm'


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
        <h4>Comments</h4>
        <CommentsForm article_id={article_id} setComments={setComments}/>
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