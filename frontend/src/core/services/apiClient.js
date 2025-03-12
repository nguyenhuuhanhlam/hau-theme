import axios from 'axios'

const api = axios.create({
	baseURL: 'http://reactlab.local/wp-json/wp/v2'
})

export const getPosts = async () => await api.get('/posts')