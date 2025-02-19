import { useEffect, useState } from "react"
import { getVotesByID, voteOnArticle } from "../utils"

function Votes ({article_id, setSingleArticle}){
    const [voteCount, setVoteCount] = useState(0)
    const [hasVotedYes, setHasVotedYes] = useState(false)
    const [hasVotedNo, setHasVotedNo] = useState(false)
    
    useEffect(()=>{
        getVotesByID(article_id).then((votesFromApi)=>{
            setVoteCount(votesFromApi)
        })

    },[])
    
    function handleIncVote (){
        if(hasVotedYes) return 
        else { 
            setHasVotedYes(true)
            setHasVotedNo(false)
            setVoteCount((prevCount)=> prevCount + 1)
            setSingleArticle((prevArticle)=>({...prevArticle, votes: prevArticle.votes + 1}))
            voteOnArticle(article_id, 1).then((updatedVotes)=>{
                setVoteCount(updatedVotes)
            }).catch(()=>{
                setVoteCount((prevCount => prevCount - 1))
                setHasVotedYes(false)
            })}
       
    }
        
    
    function handleDecVote (){
        if(hasVotedNo) return 
        else {  
            setHasVotedNo(true)
            setHasVotedYes(false)
            setVoteCount((prevCount)=> prevCount - 1)
            setSingleArticle((prevArticle)=>({...prevArticle, votes: prevArticle.votes - 1}))
            voteOnArticle(article_id, -1).then((updatedVotes)=>{
                setVoteCount(updatedVotes)
            }).catch(()=>{
                setVoteCount((prevCount => prevCount + 1))
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
      </>
      
    )
}


export default Votes