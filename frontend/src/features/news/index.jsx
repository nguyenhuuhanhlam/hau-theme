import { useParams } from 'react-router-dom'

import LatestSection from './components/LatestSection'
import FeaturesSection from './components/FeaturesSection'
import GeneralSection from './components/GeneralSection'

const News = () => {
    const { type } = useParams()

    switch (type) {
        case 'latestnews':
            return <LatestSection />
        case 'featured':
            return <FeaturesSection />
        default:
            return <GeneralSection />
    }
}

export default News
