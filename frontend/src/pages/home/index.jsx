import LatestNewsSection from './components/latestnews-section'
import PostSlide from './components/slide-section'

const HomePage = () => {
	return (
		<div>
			<div className="py-8">
				<PostSlide />
			</div>
			<LatestNewsSection />
		</div>
	)
}

export default HomePage