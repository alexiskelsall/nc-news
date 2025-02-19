import { useState } from "react"
import {  voteOnArticle } from "../utils"

function Votes ({article_id, votes }){
    const [voteCount, setVoteCount] = useState(votes)
    const [hasVotedYes, setHasVotedYes] = useState(false)
    const [hasVotedNo, setHasVotedNo] = useState(false)
    const [error, setError] = useState("")
    
    
    
    function handleIncVote (){
        if(hasVotedYes) return 
        else { 
            setHasVotedYes(true)
            setHasVotedNo(false)
            setVoteCount((prevCount)=> prevCount + 1)
            voteOnArticle(article_id, 1)
            .catch(()=>{
                setError("Failed to add vote")
                setVoteCount((prevCount) => prevCount - 1)
                setHasVotedYes(false)
            })}
       
    }
        
    
    function handleDecVote (){
        if(hasVotedNo) return 
        else {  
            setHasVotedNo(true)
            setHasVotedYes(false)
            setVoteCount((prevCount)=> prevCount - 1)
            voteOnArticle(article_id, -1)
            .catch(()=>{
                setError("Failed to add vote")
                setVoteCount((prevCount) => prevCount + 1)
                setHasVotedNo(false)
            })}
      
    }


    return (
        <>
        <p>Votes: {voteCount}</p>
        <button id="like-button" onClick={handleIncVote}>
        👍
        </button>
        <button id="unlike-button" onClick={handleDecVote}>
        👎
        </button>
        {error && <p>{error}</p>}
      </>
      
    )
}


export default Votes