import { useEffect, useState } from "react"
import { getArticles } from "../utils"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"


function ArticleList (){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [query] = useSearchParams()
    const topic = query.get("topic")
    
    
            
    useEffect(() => {
        let apiURLQuery = ""

        if(topic) {
            apiURLQuery += `?topic=${topic}`
        }
        getArticles(apiURLQuery).then((articlesFromApi)=>{
            setArticles(articlesFromApi)
            setLoading(false)
        })
        .catch(()=>{
            setError("Problem loading page")        
        }) 
    }, [topic])
   
    
    if(loading) return <p>Loading...</p>

    return (
        <section>
            <h2>{topic ? `Articles about ${topic}` : "All Articles"}</h2>
            {error && {error}}
            <ul id="article-list">
                {articles.map((article)=>{
                    return (
                        <li id="article-card" key={article.article_id}>
                            <img src={article.article_img_url} alt="Article image"/>
                            <h2>
                                <Link to={`/articles/${article.article_id}`} id="article-article_id">
                                {article.title}
                                </Link>
                            </h2>
                            <p>Written by {article.author}</p>
                            <p>Topic: {article.topic}</p>                            
                        </li>
                                             
                    )
                })}
            </ul>
            
        </section>
    )
}



export default ArticleList