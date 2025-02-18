import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://news-project-lza1.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get("/articles").then((res)=>{
        return res.data.articles
    })
}

export const getArticleByID = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then((res)=>{
        return res.data.article[0]
    })
}

export const getCommentsByID = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res)=>{
        return res.data.comments
    })
}

