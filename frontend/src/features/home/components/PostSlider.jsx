import Slider from 'react-slick'


const PostSlider = () => {
	const setting = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<div className="bg-sky-50">
			<Slider {...setting}>
				<div className="aspect-video">
					<h3>SLIDE :: POST-1</h3>
				</div>
				<div className="aspect-video">
					<h3>SLIDE :: POST-2</h3>
				</div>
				<div className="aspect-video">
					<h3>SLIDE :: POST-3</h3>
				</div>
			</Slider>
		</div>
	)
}

export default PostSlider