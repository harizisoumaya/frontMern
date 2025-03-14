import Api from "../axios/Api.js";
const ARTICLE_API="articles"

export const fetcharticles=async()=> {
    return await Api.get(ARTICLE_API);
}

export const fetcharticleById=async(articleId)=> {
    return await Api.get(ARTICLE_API + '/' + articleId);
}
export const deletearticle=async(articleId) =>{
    return await Api.delete(ARTICLE_API + '/' + articleId);
}

export const addarticle=async(article)=> {
    return await Api.post(ARTICLE_API + '/add', article);
}

export const editarticle=(article) =>{
    return Api.put(ARTICLE_API + '/' + article._id, article);
}

export const fetcharticlePagination = async(page,limit)=> {
    return await Api.get(ARTICLE_API + `/pagination?page=${page}&limit=${limit}`);
}