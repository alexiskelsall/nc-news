import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getArticleByID } from '../utils'
import Comments from './Comments'
import Votes from './Votes'



function Article (){
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState([])  
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getArticleByID(article_id).then((articleFromApi)=>{
            setSingleArticle(articleFromApi)
            setLoading(false)
        })
    }, [])

    if(loading) return <p>Loading...</p>

    return (
        <section>
                <img src={singleArticle.article_img_url} alt="Article image"/>
                <div id="button-container">
                <Votes article_id={article_id} votes={singleArticle.votes} setSingleArticle={setSingleArticle}/>
                </div>
                <h3>{singleArticle.title}</h3>
                <p>Written by {singleArticle.author}</p>
                <p>Topic: {singleArticle.topic}</p> 
                <p>{singleArticle.body}</p>
               
                <Comments article_id={article_id} />    
        </section>
    )    

}


export default Article