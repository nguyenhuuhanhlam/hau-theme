import LatestNewsSection from '../latest-news-section'
import PostSlider from './components/PostSlider'

const HomePage = () => {
	return (
		<div>
			<div className="py-8">
				<PostSlider />
			</div>
			<LatestNewsSection />
		</div>
	)
}

export default HomePage