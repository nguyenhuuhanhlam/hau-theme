import { useEffect, useState } from 'react'
import { getPosts } from '../../core/services/apiClient'

const LatestNewsSection = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getPosts().then(res => setPosts(res.data))
	}, [])

	return (
		<div className="my-4 bg-slate-50">
			<div className="text-xs pb-2">TIN MỚI NHẤT</div>
			<div>
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
		</div>
	)
}

export default LatestNewsSection