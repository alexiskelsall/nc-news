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
    const [addButton, setAddButton] = useState(true)
    const [error, setError]= useState("")

    const handleInput=(e)=>{
        setNewComment(e.target.value)
    }

    const handleSubmitComment=(e)=>{
        setError("")
        e.preventDefault()
        setAddButton(false)
        postCommentByID(article_id, user.username, newComment)
        .then(()=>{
            setSubmissionMessage("Thank you for your comment!")
            setNewComment("") 
            setTimeout(()=>{
                setSubmissionMessage("")
                setAddButton(true)
            },3000)         
        })
        .catch(()=>{
            setError("Failed to add comment")
        })
    }
    
    return (
        <form id="comment-form" onSubmit={handleSubmitComment}>
            <input value={newComment} placeholder="Add a comment" onChange={handleInput} required/>
            {addButton ? <button type="submit">Add</button> : <p></p>}  
            {submissionMessage && <p>{submissionMessage}</p>}   
            {error && <p>{error}</p>}       
        </form>
    )
}



export default CommentsForm 


