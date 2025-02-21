import { useEffect, useState } from "react"
import { data, Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import Error from './Error'


function ArticleList (){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams(); 

    const topic = searchParams.get("topic") || "";
    const sortBy = searchParams.get("sort_by") || "";
    const order = searchParams.get("order") || "";

    const handleTopic = (e) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            if (e.target.value === "all") {
                params.delete("topic")  
            } else {
                params.set("topic", e.target.value); 
            }    
            return params;
        })
    };

    const handleSort = (e) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("sort_by", e.target.value);
            return params;
        });
    };

    const handleOrder = (e) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("order", e.target.value);
            return params;
        });
    };

    useEffect(() => {
        setLoading(true);
        setError("");

        const params = {};
        if (topic) params.topic = topic;
        if (sortBy) params.sort_by = sortBy;
        if (order) params.order = order;

        axios
            .get(`https://news-project-lza1.onrender.com/api/articles`, { params })
            .then((response) => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response
                )
                setError("Oops! Something went wrong. Please check your filters and try again.");
                setLoading(false);
            });
    }, [searchParams]); 
  
    if(loading) return <p>Loading...</p>

    if(error) return <Error error={error}/>
  
    return (
        <section>
            {error && <p>{error}</p>}
            <label htmlFor="topic-select">Topic:</label>
            <select id="topics-select" onChange={handleTopic}>
            <option value="all">All Topics</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
            </select> 
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" onChange={handleSort}>
                <option value="">Select</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comments</option>
                <option value="created_at">Date</option>
                <option value="author">Author</option>
            </select>
            <label htmlFor="order-by"></label>
            <select id="order-by" onChange={handleOrder}>
            <option value="">Select</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
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
                            <p>Votes: {article.votes}</p> 
                            <p>Comments: {article.comment_count}</p>                         
                        </li>
                                             
                    )
                })}
            </ul>
            
        </section>
    )
}



export default ArticleList