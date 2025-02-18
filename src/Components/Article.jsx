import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getArticleByID } from '../utils'

function Article (){
    const { article_id } = useParams()
    const [article, setArticle] = useState([])  
    const [loading, setLoading] = useState(true);  

    useEffect(()=>{
        getArticleByID(article_id).then((articleFromApi)=>{
            setArticle(articleFromApi)
            setLoading(false)
        })
    }, [article_id])

    if(loading) return <p>Loading...</p>

    return (
        <div>

                <img src={article.article_img_url} alt="Article image"/>
                <div id="button-container">
                            <button id="votes-button"> 0 Votes</button>
                            <button id="comments-button">Comments</button>
                </div>
                <h3>{article.title}</h3>
                <p>Written by {article.author}</p>
                <p>Topic: {article.topic}</p> 
                <p>{article.body}</p>
    
        </div>
    )    

}


export default Article