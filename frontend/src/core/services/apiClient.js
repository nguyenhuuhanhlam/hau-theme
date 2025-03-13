import axios from 'axios'

const api = axios.create({
	baseURL: 'https://haukientruc.ddns.net/wp-json/wp/v2'
})

export const getPosts = async (params) => await api.get('/posts?' + params)