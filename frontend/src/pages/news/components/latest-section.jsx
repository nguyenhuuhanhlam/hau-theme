import { useEffect, useState } from 'react'
import { getPostDetail } from '@/services/apiClient'

const LatestSection = ({ postId }) => {
	const [post, setPost] = useState()

	useEffect(() => {
		getPostDetail(postId)
			.then(res => {
				setPost(res.data)
			})
	}, [])

	return (
		<div className="py-8">
			<h2>Latest Section :: {postId}</h2>
			<div>{post?.title?.rendered}</div>
			<div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
		</div>
	)
}

export default LatestSection
