import { useState } from "react"
import {  voteOnArticle } from "../utils"
import '../App.css'


function Votes ({article_id, votes }){
    const [voteCount, setVoteCount] = useState(votes)
    const [hasVotedYes, setHasVotedYes] = useState(false)
    const [hasVotedNo, setHasVotedNo] = useState(false)
    const [error, setError] = useState("")
    
    
    const handleIncVote= ()=>{
        if (hasVotedNo) {
            setVoteCount((prev) => prev + 2);
            setHasVotedNo(false);
            setHasVotedYes(true);
            
            voteOnArticle(article_id, 2).catch(() => {
                setVoteCount((prev) => prev - 2);
                setHasVotedNo(true);
                setHasVotedYes(false);
                setError("Failed to change vote.");
            });
    
        } else if (!hasVotedYes) {
            setVoteCount((prev) => prev + 1);
            setHasVotedYes(true);
            setHasVotedNo(false);
    
            voteOnArticle(article_id, 1).catch(() => {
                setVoteCount((prev) => prev - 1);
                setHasVotedYes(false);
                setError("Failed to upvote.");
            });
    
        } else {
            setVoteCount((prev) => prev - 1);
            setHasVotedYes(false);
    
            voteOnArticle(article_id, -1).catch(() => {
                setVoteCount((prev) => prev + 1);
                setHasVotedYes(true);
                setError("Failed to remove upvote.");
            });
        }
    }

    const handleDecVote =()=>{
        if (hasVotedYes) {
            setVoteCount((prev) => prev - 2);
            setHasVotedYes(false);
            setHasVotedNo(true);
    
            voteOnArticle(article_id, -2).catch(() => {
                setVoteCount((prev) => prev + 2);
                setHasVotedYes(true);
                setHasVotedNo(false);
                setError("Failed to change vote.");
            });
    
        } else if (!hasVotedNo) {
            setVoteCount((prev) => prev - 1);
            setHasVotedNo(true);
            setHasVotedYes(false);
    
            voteOnArticle(article_id, -1).catch(() => {
                setVoteCount((prev) => prev + 1);
                setHasVotedNo(false);
                setError("Failed to downvote.");
            });
    
        } else {
            setVoteCount((prev) => prev + 1);
            setHasVotedNo(false);
    
            voteOnArticle(article_id, 1).catch(() => {
                setVoteCount((prev) => prev - 1);
                setHasVotedNo(true);
                setError("Failed to remove downvote.");
            });
        }
    }
    

    return (
        <>
        <p>Votes: {voteCount}</p>
        <button  onClick={handleIncVote} id={hasVotedYes ? "like-button" : ""}>
        👍
        </button>
        <button  onClick={handleDecVote} id={hasVotedNo ? "unlike-button" : ""}>
        👎
        </button>
        {error && <p>{error}</p>}
      </>
      
    )
}


export default Votes