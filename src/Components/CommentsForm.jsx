import { useState } from 'react'
import { postCommentByID } from '../utils'

function CommentsForm ({article_id, setComments}){
    const user =  {
        username: 'tickle122',
        name: 'Tom Tickle',
        avatar_url:
          'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
      }

    const [newComment, setNewComment]= useState("")
    const [submissionMessage, setSubmissionMessage]=useState("")
    const [error, setError]= useState("")

    const handleInput=(e)=>{
        setNewComment(e.target.value)
    }

    const handleSubmitComment=(e)=>{
        e.preventDefault()
        postCommentByID(article_id, user.username, newComment)
        .then(()=>{
            setSubmissionMessage("Thank you for your comment!")
            setNewComment("") 
            setTimeout(()=>{
                setSubmissionMessage("")
            },3000)         
        })
        .catch(()=>{
            setError("Failed to add comment")
        })
    }
    

    return (
        <form id="comment-form" onSubmit={handleSubmitComment}>
            <input value={newComment} placeholder="Add a comment" onChange={handleInput} required/>
            <button type="submit">Add</button>   
            {submissionMessage && <p>{submissionMessage}</p>}   
            {error && <p>{error}</p>}       
        </form>
    )
}



export default CommentsForm 


