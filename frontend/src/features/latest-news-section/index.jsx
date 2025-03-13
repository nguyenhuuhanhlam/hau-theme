import { useEffect, useState } from 'react'
import { getPosts } from '../../core/services/apiClient'

const LatestNewsSection = () => {
	const [posts, setPosts] = useState([])
	const per_page = 5

	useEffect(() => {
		const params = {}

		getPosts(`per_page=${per_page}&order=desc&orderby=date&_embed=true`)
			.then(res => {
				setPosts(res.data)
			})
	}, [])

	return (
		<div className="my-4">
			<div className="text-xs pb-2">TIN MỚI NHẤT</div>
			<div>
				{/* {
					posts.length > 0
						? posts.map(post => {
							return (
								<div key={post.id} className="py-2">
									<div className="font-bold">{post.title.rendered}</div>
									<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
								</div>
							)
						})
						: null
				} */}


				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="space-y-4 md:col-span-1">
							{
								posts.slice(0, 2)
									.map(article =>
									(
										<ArticleCard
											key={article.id}
											title={article.title.rendered}
											image={article._embedded['wp:featuredmedia'][0]['source_url']}
										/>
									))
							}
						</div>

						<div className="flex flex-col items-center md:col-span-2">
							<h2 className="text-lg font-semibold">
								<ArticleCard title={posts[4]?.title?.rendered} image={posts[4]?._embedded['wp:featuredmedia'][0]['source_url']} />
							</h2>
						</div>

						<div className="space-y-4 md:col-span-1">
						{
								posts.slice(2, 4)
									.map(article =>
									(
										<ArticleCard
											key={article.id}
											title={article.title.rendered}
											image={article._embedded['wp:featuredmedia'][0]['source_url']}
										/>
									))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function ArticleCard({ title, image, category }) {
	return (
		<div className="bg-stone-50 overflow-hidden">
			<img src={image} alt={title} className="w-full h-40 object-cover" />
			<div>
				<p className="text-sm text-green-600">{category}</p>
				<h3 className="text-md font-semibold">{title}</h3>
			</div>
		</div>
	);
}

export default LatestNewsSection