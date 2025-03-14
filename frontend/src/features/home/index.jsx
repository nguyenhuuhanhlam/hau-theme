import LatestNewsSection from './components/LatestNewsSection'
import PostSlide from './components/PostSlide'

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