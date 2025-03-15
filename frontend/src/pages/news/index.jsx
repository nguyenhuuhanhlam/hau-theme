import { useParams } from 'react-router-dom'

import LatestSection from './components/latest-section'
import FeatureSection from './components/feature-section'
import GeneralSection from './components/general-section'

const News = () => {
    const { category, post_id } = useParams()

    switch (category) {
        case 'latest-news':
            return <LatestSection postId={post_id} />
        case 'feature':
            return <FeatureSection />
        default:
            return <GeneralSection />
    }
}

export default News
