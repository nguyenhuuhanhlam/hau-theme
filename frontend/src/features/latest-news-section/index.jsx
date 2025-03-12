import { useEffect, useState } from 'react'
import { getPosts } from '../../core/services/apiClient'

const LatestNewsSection = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getPosts().then(res => setPosts(res.data))
	}, [])

	return (
		<div>
			<div>Latest Posts</div>
			{
				posts.length > 0
					? posts.map(post => {
						return (
							<div key={post.id}>
								<div>{post.title.rendered}</div>
								<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
							</div>
						)
					})
					: null
			}
		</div>
	)
}

export default LatestNewsSection