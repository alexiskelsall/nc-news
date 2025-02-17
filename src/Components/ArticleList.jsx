import { useEffect } from "react"
import { getArticles } from "../utils"
import { useState } from 'react'


function ArticleList (){
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        getArticles().then((articlesFromApi)=>{
            setArticles(articlesFromApi)
            console.log(articles)
        })
        

    }, [])
    

    return (
        <div>
            <ul id="article-list">
                {articles.map((article)=>{
                    return (
                        <li id="article-card" key={article.article_id}>
                            <img src={article.article_img_url} alt="Article image"/>
                            <div id="button-container">
                            <button id="votes-button"> 0 Votes</button>
                            <button id="comments-button">Comments</button>
                            </div>
                            <h2>{article.title}</h2>
                            <p>Written by {article.author}</p>
                            <p>Topic: {article.topic}</p>                            
                        </li>
                        
                     
                    )
                })}
            </ul>
        </div>
    )
}



export default ArticleList