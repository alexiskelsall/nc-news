import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://news-project-lza1.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get("/articles").then((res)=>{
        return res.data.articles
    })
}

