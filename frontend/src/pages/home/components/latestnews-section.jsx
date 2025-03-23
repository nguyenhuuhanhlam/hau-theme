import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getPosts } from '@/services/apiClient'

const objectToQueryString = (params) => {
	return Object.keys(params)
		.map(key => `${key}=${params[key]}`)
		.join('&')
}

const LatestNewsSection = () => {
	const [posts, setPosts] = useState([])
	let navigate = useNavigate()

	useEffect(() => {
		const params = {
			per_page: 5,
			order: 'desc',
			orderby: 'date',
			_embed: true,
			_fields: 'id,title,excerpt,date,author,categories,_links.wp:featuredmedia,_embedded'
		}

		getPosts(objectToQueryString(params))
			.then(res => {
				setPosts(res.data)
			})
	}, [])

	const handleClick = (postId) => {
		navigate('/news/latest-news/' + postId)
	}

	return (
		<div className="my-4">
			<div className="text-xs pb-2 font-bold px-2 md:px-0">TIN MỚI NHẤT</div>
			<div>
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
											onClick={() => handleClick(article.id)}
										/>
									))
							}
						</div>

						<div className="flex flex-col items-center md:col-span-2">
								{posts[4]?
								<ArticleCard
									title={posts[4]?.title?.rendered}
									image={posts[4]?._embedded['wp:featuredmedia'][0]['source_url']}
									isSquareImage={true}
									onClick={() => handleClick(posts[4]?.id)}
								/>:null}
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
											onClick={() => handleClick(article.id)}
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

function ArticleCard({ title, image, category = "Default", isSquareImage = false, onClick }) {
	return (
		<div className="overflow-hidden">
			<div className={isSquareImage ? "aspect-square w-full" : "w-full h-40"}>
				<img src={image} alt={title} className="w-full h-full object-cover" />
			</div>
			<div className="py-2">
				<p className="text-xs bg-stone-50 inline-block px-2 py-0.5 rounded">{category}</p>
				<h3
					className="text-md font-semibold line-clamp-2 px-2 md:px-0 cursor-pointer"
					onClick={onClick}
				>
					{title}
				</h3>
			</div>
		</div>
	)
}

export default LatestNewsSection