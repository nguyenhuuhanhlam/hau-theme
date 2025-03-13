import { useEffect, useState } from 'react'
import Slider from 'react-slick'

const PostSlider = () => {
	const [slideItems, setSlideItems] = useState([])

	const setting = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	useEffect(() => {
		setSlideItems([
			{ url: '/uploads/slides/slide-exam-1.jpg' },
			{ url: '/uploads/slides/slide-exam-2.jpg' },
			{ url: '/uploads/slides/slide-exam-3.jpg' },
			{ url: '/uploads/slides/slide-exam-4.jpg' }
		])
	}, [])

	return (
		<div>
			<Slider {...setting}>
				{slideItems.map((item, k) => {
					return (
						<div key={k}>
							<div
								className="aspect-video bg-cover bg-bottom"
								style={{ backgroundImage: `url(${item.url})` }}
							></div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default PostSlider