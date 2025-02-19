import { useEffect, useState } from 'react'
import { deleteArticleByID, getCommentsByID } from '../utils'
import CommentsForm from './CommentsForm'


function Comments ({article_id}){
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleteMessage, setDeleteMessage] = useState("")
    const [error, setError] = useState("")
    
    const user =  {
        username: 'tickle122',
        name: 'Tom Tickle',
        avatar_url:
          'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
      }

    useEffect(()=>{
        getCommentsByID(article_id).then((commentsFromApi)=>
        setComments(commentsFromApi))
        setLoading(false)
    },[article_id])
    
    if(loading) return <p>Loading...</p>

    const handleDelete = (comment_id)=>{
        setDeleteMessage("Comment deleted")
        setComments((prevComments)=>prevComments.filter((comment)=> comment.comment_id !== comment_id))
        setTimeout(()=>{
            setDeleteMessage("")
        },3000) 
        deleteArticleByID(comment_id).catch(()=>{
            setError("Failed to delete comment")
        })
       
    }

    return (
        <>
        <h4>Comments</h4>
        <CommentsForm article_id={article_id} setComments={setComments}/>
        <section>
            <ul id="comment-list">
            {deleteMessage && <p>{deleteMessage}</p>} 
            {error && <p>{error}</p>}
                {comments.map((comment)=>{
                    return (
                        
                        <li className="comment-card" key={comment.comment_id}>
                            <p>Username: {comment.author}</p>
                            <p>{comment.body}</p>  
                            {comment.author === user.username && (
                                <button onClick={()=>handleDelete(comment.comment_id)}>Delete</button>
                            )}
                                                     
                        </li>

                    )
                })}
            </ul>
        </section>
        </>

    )

}



export default Comments