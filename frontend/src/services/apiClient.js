import axios from 'axios'

const api = axios.create({
	baseURL: 'https://haukientruc.ddns.net/wp-json/wp/v2'
})

export const getPosts = async (params) => await api.get('/posts?' + params)
export const getPostDetail = async(postId) => await api.get(`/posts/${postId}`)

export const getCategories = async () => await api.get('/categories?per_page=100')