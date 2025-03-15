import { useEffect, useState } from 'react'
import { getPostDetail } from '@/services/apiClient'
import AutoBreadCrumb from '@/components/common/auto-breadcrumb'
import './index.css'

const LatestSection = ({ postId }) => {
	const [post, setPost] = useState()
	const bcrumb = [
		{ href: '/', text: 'Home' },
		{ href: '/news', text: 'News' },
		{ text: 'Latest News' },
	]

	useEffect(() => {
		getPostDetail(postId)
			.then(res => {
				setPost(res.data)
			})
	}, [])

	return (
		<div className="py-8 space-y-8 px-4 md:px-0">
			<h2><AutoBreadCrumb items={bcrumb} /></h2>
			<div className="from-wp text-3xl">{post?.title?.rendered}</div>
			<div className="from-wp" dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
		</div>
	)
}

export default LatestSection
